export default {
  layout: "blog-post-page.njk",
  eleventyComputed: {
    authorFiles (data) {
      const lookup = data.collections.authors.reduce((map, author) => {
        map.set(author.page.fileSlug, author);
        return map;
      }, new Map());

      return data.authors.map(a => lookup.get(a));
    }
  }
};
