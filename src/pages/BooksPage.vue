<template>
  <q-page>
    <BooksTable :books="books" />
  </q-page>
</template>

<script setup>
import { computed } from "vue";

import BooksTable from "components/books/BooksTable.vue";

import { usePostsStore } from "src/stores/posts-store";

const postsStore = usePostsStore();

const books = computed(() => postsStore.books);
</script>

<style lang="scss" scoped></style>
