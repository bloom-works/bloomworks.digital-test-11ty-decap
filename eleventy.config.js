import { HtmlBasePlugin, RenderPlugin } from "@11ty/eleventy";

export const config = {
	// Control which files Eleventy will process
	// e.g.: *.md, *.njk, *.html, *.liquid
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],

	// Pre-process *.md files with: (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with: (default: `liquid`)
	htmlTemplateEngine: "njk",

	// These are all optional:
	dir: {
		input: "src/content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// -----------------------------------------------------------------
	// Optional items:
	// -----------------------------------------------------------------

	// If your site deploys to a subdirectory, change `pathPrefix`.
	// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

	// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
	// it will transform any absolute URLs in your HTML to include this
	// folder name and does **not** affect where things go in the output folder.

	// pathPrefix: "/",
};

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPlugin(RenderPlugin);

  eleventyConfig.addPassthroughCopy({
    "./src/static/": "/"
  });

  eleventyConfig.addCollection("experiences", async (collectionApi) => {
    // For each page as a folder of stuff:
    // return collectionApi.getFilteredByGlob("src/content/experiences/*/index.md");

    return collectionApi.getFilteredByGlob("src/content/experiences/*.md").filter(item => !item.inputPath.endsWith('/index.md'));
  });

  eleventyConfig.addCollection("blogPosts", async (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md");
  });

  eleventyConfig.addCollection("authors", async (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/content/authors/*.md");
  });

  // In a real setup, we should probably use luxon or something to give us a
  // nice filter that takes a format string.
  const monthAndYearFormatter = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });
  eleventyConfig.addFilter("monthAndYear", (isoDate) => {
    const date = new Date(isoDate);
    return monthAndYearFormatter.format(date);
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {dateStyle: "long"});
  eleventyConfig.addFilter("humanDate", (isoDate) => {
    const date = new Date(isoDate);
    return dateFormatter.format(date);
  });
};
