// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("blogs");


  eleventyConfig.addShortcode("blogsnippet", function (label, url, snippet) {
    return `
    <div class="blogsnippet"><h2><strong>${label}:</strong>
    <a href="/blogs/${url}" title="${label}'s Trip">${snippet}</a></h2></div>
    `
  });
};