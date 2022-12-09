nunjucksEnvironment = require('./nunjucks-env')
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const Eleventy = require("@11ty/eleventy");

module.exports = function(eleventyConfig) { 
  // this means everything that isn't a template file (e.g. assets) will be
  // copied into _site by default:
  eleventyConfig.setTemplateFormats([
    "*"
  ]);
  eleventyConfig.setServerPassthroughCopyBehavior("copy"); // seems to be necessary to prevent bugs

  // Handle alternate prefix (for gh pages)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addGlobalData("config", () => {
    return { version: Eleventy.getVersion() };
  });

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
};
