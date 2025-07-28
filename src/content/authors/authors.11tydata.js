export default {
  layout: "author-page.njk",
  eleventyComputed: {
    authorPosts (data) {
      const author = data.page.fileSlug;
      return data.collections.blogPosts.filter(p => p.data.authors.includes(author));
    }
  }
};
