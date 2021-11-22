module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images/**/*.(png|jgp|jpeg)");

    eleventyConfig.addPassthroughCopy("js/**.js");

    return { dir: { layouts: "../layouts" } }
  
  };