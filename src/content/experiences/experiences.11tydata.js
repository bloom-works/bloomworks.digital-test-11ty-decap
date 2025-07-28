export default {
  layout: "case-study-page.njk",
  eleventyComputed: {
    relatedFiles (data) {
      const lookup = data.collections.experiences.reduce((map, file) => {
        map.set(file.page.fileSlug, file);
        return map;
      }, new Map());

      return data.related.map(x => lookup.get(x));
    }
  }
};
