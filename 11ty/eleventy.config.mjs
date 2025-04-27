import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export const config = {
    dir: {
        input: "src"
    }
};

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
};

