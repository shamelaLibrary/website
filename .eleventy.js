module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images/**/*.(png|jgp|jpeg)");

    eleventyConfig.addPassthroughCopy("js/**.js");
    eleventyConfig.addPassthroughCopy("css/**/*.css");

    return { dir: { layouts: "../layouts" } }
  
  };