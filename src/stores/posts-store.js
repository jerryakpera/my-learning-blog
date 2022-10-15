import { defineStore } from "pinia";
import moment from "moment";

import {
  getPost,
  getPosts,
  getWelcomeScreen,
  getAbout,
} from "src/services/index";

export const usePostsStore = defineStore("post", {
  state: () => ({
    posts: [],
    recentPosts: [],
    featuredPosts: [],
    welcomeScreen: null,
    editPost: false,
    about: null,
    post: null,
  }),

  actions: {
    toggleEditPost(payload) {
      this.editPost = payload;
    },

    async loadPosts(posts) {
      return posts
        .map((post) => post.node)
        .sort((a, b) => b.createdAt > a.createdAt)
        .map((post) => {
          return {
            ...post,
            date: moment(new Date(post.createdAt)).format("LL"),
          };
        });
    },

    async getPosts() {
      return (await getPosts()) || [];
    },

    async getWelcomeScreen() {
      return (await getWelcomeScreen()) || [];
    },

    async getAboutDetails() {
      return (await getAbout()) || [];
    },

    async getPostBySlug(slug) {
      return await getPost(slug);
    },
  },
});
