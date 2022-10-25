<template>
  <q-page>
    <BlogTable :posts="postsStore.posts" />
  </q-page>
</template>

<script setup>
import BlogTable from "../components/blog/BlogTable.vue";

import { ref, computed } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const postsStore = usePostsStore();

const filter = ref();
const current = ref(1);

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 12,
  // rowsNumber: xx if getting data from a server
});

const pagesNumber = computed(() => {
  return Math.ceil(rows.length / pagination.value.rowsPerPage);
});
</script>

<style></style>
