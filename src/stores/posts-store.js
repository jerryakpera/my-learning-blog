import { defineStore } from "pinia";
import moment from "moment";

import {
  getPost,
  getAbout,
  getPosts,
  getComments,
  getCategories,
  getWelcomeScreen,
  getPostsByCategory,
} from "src/services/index";

export const usePostsStore = defineStore("post", {
  state: () => ({
    posts: [],
    categories: [],
    recentPosts: [],
    featuredPosts: [],
    categoryPosts: [],
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
      try {
        return (await getPosts()) || [];
      } catch (err) {
        throw err;
      }
    },

    async getCategories() {
      try {
        return (await getCategories()) || [];
      } catch (err) {
        throw err;
      }
    },

    async loadCategories(categories) {
      return categories
        .map((category) => category.node)
        .sort((a, b) => b.createdAt > a.createdAt)
        .map((category) => {
          return {
            ...category,
            date: moment(new Date(category.createdAt)).format("LL"),
          };
        });
    },

    async loadResults(results) {
      return results
        .map((result) => result.node)
        .map((result) => {
          return {
            ...result,
            date: moment(new Date(result.createdAt)).format("LL"),
          };
        });
    },

    async getPostsByCategory(slug) {
      try {
        return await getPostsByCategory(slug);
      } catch (err) {
        throw err;
      }
    },

    async getCommentsForPost(slug) {
      try {
        return await getComments(slug);
      } catch (err) {
        throw err;
      }
    },

    async getWelcomeScreen() {
      try {
        return (await getWelcomeScreen()) || [];
      } catch (err) {
        throw err;
      }
    },

    async getAboutDetails() {
      try {
        return (await getAbout()) || [];
      } catch (err) {
        throw err;
      }
    },

    async getPostBySlug(slug) {
      try {
        return await getPost(slug);
      } catch (err) {
        throw err;
      }
    },

    async loadAppData() {
      let posts = await this.getPosts();
      posts = await this.loadPosts(posts);

      const categories = await this.getCategories();
      this.categories = await this.loadCategories(categories);

      this.posts = [...posts].sort((a, b) => b.createdAt > a.createdAt);
      this.featuredPosts = [...posts]
        .splice(0, 4)
        .sort((a, b) => b.createdAt > a.createdAt);
      this.recentPosts = [...posts]
        .splice(0, 4)
        .sort((a, b) => b.createdAt > a.createdAt);

      this.welcomeScreen = await this.getWelcomeScreen();

      this.about = await this.getAboutDetails();
    },
  },
});
