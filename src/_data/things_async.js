// // basically this flattens all the objects in subdirectories into one big object of 'things'
// // with a 'category' property to tell what kind of thing it is.
// // e.g.
// // things: {
// //   "read-input": {
// //     "category": "techniques"
// //     "subcategory": "input"
// //   }, 
// //   ...
// // }
// // (this is to make it easy to generate pages for all the different types of things)

// // ! need to be careful about colliding keys in the merged object
// // TODO raise an error for this

// // TODO move this out of _data and into addGlobal somewhere else

// const { debug } = require('console');
// const fs = require('fs');
// const {
//   lstat,
//   readdir,
//   access,
// } = require('fs/promises');
// const path = require('path');

// const objMap = (obj, fn) => {
//   return Object.fromEntries(
//     Object.entries(obj).map(
//       ([k, v], i) => [k, fn(v, k, i)]
//     )
//   );
// }

// const existsAsync = async file => {
//   try {
//     await access(file, fs.constants.F_OK);
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// const listFileTreeRecursive = async dir => {
//   const recurse = async (entry) => {
//     if (!(await existsAsync(entry))) {
//       return {};
//     }

//     const stats = await lstat(entry);
//     if (!stats.isDirectory()) {
//       return {
//         name: path.basename(entry),
//         time: stats.mtime,
//         size: stats.size,
//         path: entry
//       };
//     }

//     const files = await readdir(entry);
//     const childEntries = await Promise.all(
//       files.map((child) => recurse(path.join(entry, child))),
//     );
//     return {
//       name: path.basename(entry),
//       time: stats.mtime,
//       entries: childEntries,
//       path: entry
//     };
//   };

//   return recurse(dir);
// }


// const getThings = async () => {
//   const dataDir = "./src/_data/"
//   const ignore = new Set(['things.js', 'categories.js']);
//   const fileTree = await listFileTreeRecursive(dataDir);
//   const loadModulesInTree = async entry => {
//     if (entry.entries !== undefined) {
//       // directory
//       const res = await Promise.all(
//         entry.entries
//         .filter(e => !ignore.has(e.name))
//         .map(async e => {
//           const name =  path.basename(e.name, '.js'); // strip the .js from the end for js files
//           return [name, await loadModulesInTree(e)];
//         })
//       );
//       return Object.fromEntries(res);
//     } else {
//       // file

//       // import JS
//       const relPath = path.relative(dataDir, entry.path);
//       const m = await import('./'+relPath);
//       // console.log(m.default);

//       return m.default;
//     }
//   }
//   modules = await loadModulesInTree(fileTree);
//   const dataDirBase = path.basename(dataDir); // "_data"
//   return modules;
// }

// // getThings().then(_ => console.dir(_, {depth : 20}))

// const flattenThings = async things => {
//   return Object.entries(things).reduce((previous, [category, thingsInCategory]) => {
//     return {
//       ...previous,
//       ...(objMap(thingsInCategory, (v, k) => ({
//         ...v,
//         id: k,
//         category
//       })))
//     };
//   }, {});
// }
// // listFileTreeRecursive("./src/_data/").then(_ => console.dir(_, {depth : 20}));

// module.exports = async () => {
//   const unFlatThings = await getThings();
//   return flattenThings(unFlatThings);
// }