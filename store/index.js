export const state = () => ({
  posts: []
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  }
};

export const actions = {
  async getPosts({ state, commit }) {
    if (state.posts.length) return;

    try {
      let posts = await fetch(
        `/api/posts?api_key=${this.$config.apiKey}`
      ).then(res => res.json());
      posts = posts.response.posts
        .filter(el => el.type === "quote")
        .map(({ id, slug, date, tags, text, source }) => ({
          id,
          slug,
          date,
          tags,
          text,
          source
        }));
      commit("updatePosts", posts);
    } catch (err) {
      console.log(err);
    }
  }
};
