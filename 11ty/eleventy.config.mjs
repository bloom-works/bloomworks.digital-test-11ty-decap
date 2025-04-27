import eleventyNavigationPlugin from "@11ty/eleventy-navigation"

export const config = {
    dir: {
        input: "src",
        layouts: "_includes/layouts"
    },
    markdownTemplatEngine: "njk"
}

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addPassthroughCopy("./src/styles.css")
    eleventyConfig.addGlobalData("layout", "base.njk")
}

