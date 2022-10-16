<template>
  <router-view />
</template>

<script setup>
import { getAbout } from "src/services/get-about";

import { onMounted } from "vue";
import { useQuasar } from "quasar";
import { usePostsStore } from "src/stores/posts-store";

const $q = useQuasar();
const postsStore = usePostsStore();

onMounted(async () => {
  $q.loading.show();

  try {
    let posts = await postsStore.getPosts();
    posts = await postsStore.loadPosts(posts);

    const categories = await postsStore.getCategories();
    postsStore.categories = await postsStore.loadCategories(categories);

    postsStore.posts = [...posts];
    postsStore.featuredPosts = [...posts].splice(0, 2);
    postsStore.recentPosts = [...posts].splice(2);

    postsStore.welcomeScreen = await postsStore.getWelcomeScreen();

    postsStore.about = await postsStore.getAboutDetails();
  } catch (err) {
    $q.notify({
      message: err,
      color: "dark",
    });
  }

  $q.loading.hide();
});
</script>
