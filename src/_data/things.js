// basically this flattens all the objects in subdirectories into one big object of 'things'
// with a 'category' property to tell what kind of thing it is.
// e.g.
// things: {
//   "read-input": {
//     "category": "techniques"
//     "subcategory": "input"
//   }, 
//   ...
// }
// (this is to make it easy to generate pages for all the different types of things)

// ! need to be careful about colliding keys in the merged object
// TODO raise an error for this

// TODO move this out of _data and into addGlobal somewhere else

const { debug } = require('console');
const fs = require('fs');
const assert = require('assert');
const {
  lstat,
  readdir,
  access,
} = require('fs/promises');
const path = require('path');

// these are also defined in nunjucks-env.js, not good, need to reorganise things
const uniq = (vals) => {
  return [...new Set(vals)]
}
const objMapValues = (obj, fn) => {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  );
}

const objMap = (obj, fn) => {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => fn(v, k, i)
    )
  );
}

const exists = file => {
  try {
    fs.accessSync(file, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

const listFileTreeRecursive = dir => {
  const recurse = entry => {
    if (!(fs.existsSync(entry))) {
      console.log(entry, "doesn't exist")
      return {};
    }

    const stats = fs.lstatSync(entry);
    if (!stats.isDirectory()) {
      return {
        name: path.basename(entry),
        time: stats.mtime,
        size: stats.size,
        path: entry
      };
    }

    const files = fs.readdirSync(entry);
    const childEntries = files.map((child) => recurse(path.join(entry, child)))
    return {
      name: path.basename(entry),
      time: stats.mtime,
      entries: childEntries,
      path: entry
    };
  };

  return recurse(dir);
}


const getThings = () => {
  const dataDir = "./src/_data/"
  const ignore = new Set(['things.js', 'categories.js']);
  const fileTree = listFileTreeRecursive(dataDir);
  const loadModulesInTree = entry => {
    if (entry.entries !== undefined) {
      // directory
      const res = entry.entries
                       .filter(e => !ignore.has(e.name))
                       .map(e => {
                         const name =  path.basename(e.name, '.js'); // strip the .js from the end for js files
                         return [name, loadModulesInTree(e)];
                       });
      return Object.fromEntries(res);
    } else {
      // file

      // import JS
      const relPath = path.relative(dataDir, entry.path);
      const m = require('./'+relPath);
      return m;
    }
  }
  modules = loadModulesInTree(fileTree);
  const dataDirBase = path.basename(dataDir); // "_data"
  return modules;
}

// getThings().then(_ => console.dir(_, {depth : 20}))

const flattenThings = things => {
  return Object.entries(things).reduce((previous, [category, thingsInCategory]) => {
    return {
      ...previous,
      ...(objMap(thingsInCategory, (v, k) => {
        const newKey = '/'+category+'/'+k; // e.g. move 'bizhawk' to '/tools/bizhawk'
        return [
          newKey, // key
          {
            ...v,
            id: newKey,
            localId: k,
            category
          }                   // value
        ]
      }))
    };
  }, {});
}
// listFileTreeRecursive("./src/_data/").then(_ => console.dir(_, {depth : 20}));

// make all the inter-category relations bidirectional
// e.g. if bizhawk.techniques contains 'load-state', then load-state.tools should contain bizhawk
const symmetricClosureInPlace = (flatThings) => {
  const categories = uniq(Object.values(flatThings).map(v => v.category));

  objMapValues(flatThings, thing => {
    objMap(thing, (v, k) => {
      if (categories.includes(k)) {
        // thing has a key like 'techniques'
        const associatedThingBaseNames = v;
        associatedThingBaseNames.forEach(associatedThingBaseName => {
          associatedThingId = '/'+k+'/'+associatedThingBaseName;
          // check if it actually exists
          const associatedThing = flatThings[associatedThingId]
          if (associatedThing) {
            // make sure the category is right, otherwise something is really wrong
            assert(associatedThing.category == k);
            // set the reverse property on the associated thing
            const reverseRelation = associatedThing[thing.category];
            if (reverseRelation instanceof Array) {
              // if symmetric relation doesn't exist, add it
              if (!reverseRelation.includes(thing.localId)) {
                reverseRelation.push(thing.localId);
              }
            } else if (reverseRelation == undefined) {
              // no reverse relation at all, add one and populate it
              associatedThing[thing.category] = [thing.localId];
            } else {
              console.warn(`Got unexpected type ${typeof reverseRelation} for ${associatedThing.id}.${thing.category}`);
              console.log(reverseRelation);
            }
          } else {
            console.warn(`${thing.id}.${k} includes non-existent thing ${associatedThingId}`);
          }
        });
      };
      return [0,0]; //urgh
    });
    return 0; //urgh
  });
};

const unFlatThings = getThings();
const flatThings = flattenThings(unFlatThings);

symmetricClosureInPlace(flatThings);

// console.dir(flatThings, {depth : 20});

module.exports = flatThings;