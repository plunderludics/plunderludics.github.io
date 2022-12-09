const { debug } = require('console');
const { map } = require('./src/_data/categories.js');

const path = require('path');

const things = require('./src/_data/things.js');

Nunjucks = require('nunjucks');

let nunjucksEnvironment = new Nunjucks.Environment(
  new Nunjucks.FileSystemLoader("_includes")
);

// TODO probably movethese into myutils.js or whatever
const objMap = (obj, fn) => {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  );
}
const objFilter = (obj, fn) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([k, v], i) => fn(v, k, i)
    )
  );
}
const uniq = (vals) => {
  return [...new Set(vals)]
}
const pick = (objs, key) => {
  return objs.map(v => v[key]);
}

const objValues = (obj) => Object.values(obj);

const selectByCategoryId = (things, categoryId) => objFilter(
  things,
  (t => t.category == categoryId)
);

const getThing = thingId => {
  // console.log("getThing", thingId);
  return things[thingId];
}

const showThing = thing => thing.name || thing.date || thing.id;

const linkThing = (thingOrThingId, content) => {
  //console.log("link_thing", thingOrThingId, content);
  
  let thing;
  let thingId;
  let style;
  if (typeof thingOrThingId == "string") {
    //console.log("link_thing", thingOrThingId, content);

    // lookup thing based on id
    thingId = thingOrThingId;
    thing = getThing(thingId);
    // console.log("getThing returned", thing, "for", thingId);
    if (thing === undefined ) {
      // object doesn't exist,
      // color it red for now
      style = "color: red";
    }
  } else if (typeof thingOrThingId == "object") {
    thing = thingOrThingId;
    thingId = thing.id;
  }


  if (content === undefined) {
    if (thing !== undefined) {
      content = showThing(thing);
    } else {
      content = path.basename(thingId);
    }
  }

  return makeLink(`${thingId}.html`, content, style);
}

const utils = {
  uniq,
  pick,
  objValues,
  selectByCategoryId,
  showThing,
  linkThing,
  getThing
}

const makeLink = (href, content, style) => {
  style ||= ""
  return nunjucksEnvironment.filters.safe(`<a href=${href} style="${style}">${content}</a>`)
}

// Converts e.g. 'tools/bizhawk' into an html anchor tag linking to that page
// (potentially with clever styling e.g. red for dead links)

nunjucksEnvironment.addFilter(
  "link_category",
  (content, category) => {
    return makeLink(`/${category}/index.html`, content)
  }
);

// usage:
// {{ content | link_thing(thingOrThingId) }}
nunjucksEnvironment.addFilter(
  "link_thing",
  (content, thingOrThingId) => linkThing(thingOrThingId, content)
);
// (kind of abusing the system here to allow two different usages)
// usage:
// {{ link_thing(thingOrThingId, [content]) }}
nunjucksEnvironment.addGlobal("link_thing", linkThing);

// get a text representation of a thing
nunjucksEnvironment.addFilter(
  "show_thing",
  showThing
);

nunjucksEnvironment.addFilter(
  "render",
  (str) => str ? nunjucksEnvironment.renderString(str, this.ctx) : ""
);

nunjucksEnvironment.addGlobal("u", utils)


module.exports = nunjucksEnvironment;