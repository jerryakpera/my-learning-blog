<template>
  <q-page class="q-px-xl">
    <BlogTable :posts="postsStore.categoryPosts" :title="title" v-if="title" />
  </q-page>
</template>

<script setup>
import BlogTable from "../components/blog/BlogTable.vue";

import { useQuasar } from "quasar";
import { ref, computed, onMounted } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["slug"]);

const $q = useQuasar();
const postsStore = usePostsStore();

const filter = ref();
const current = ref(1);

const _slug = computed(() => props.slug);

const posts = ref(null);

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 12,
});

const pagesNumber = computed(() => {
  return Math.ceil(rows.length / pagination.value.rowsPerPage);
});

const title = computed(() => {
  const catName = document.title.split("|")[1];

  return `Categories | ${catName || "Posts"}`;
});

onMounted(async () => {
  $q.loading.show();

  try {
    let posts = await postsStore.getPostsByCategory(props.slug);
    posts = await postsStore.loadPosts(posts);

    postsStore.categoryPosts = [...posts];
  } catch (err) {
    $q.notify({
      message: err,
      color: "dark",
    });
  }

  $q.loading.hide();
});
</script>

<style></style>
