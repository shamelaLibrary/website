module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("images/**/*.(png|jgp|jpeg)");
  
    return { dir: { layouts: "../layouts" } }
  
  };