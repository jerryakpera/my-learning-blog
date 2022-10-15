import { defineStore } from "pinia";

import { getAuthor } from "src/services/index";

export const useUsersStore = defineStore("user", {
  state: () => ({
    profile: null,
  }),

  actions: {
    async getAuthorsProfile(slug) {
      return await getAuthor(slug);
    },
  },
});
