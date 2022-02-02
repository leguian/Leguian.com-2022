module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('src/specialites/*.md')];
  return posts.reverse();
};
