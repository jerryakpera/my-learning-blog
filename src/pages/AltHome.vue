<template>
  <q-page>
    <div class="q-mt-md q-ml-sm">
      <Categories :categories="postsStore.categories" />
    </div>
    <BlogTable :posts="postsStore.posts" />

    <div class="row q-col-gutter-sm q-px-md">
      <div class="col-12 col-md-8">
        <div
          class="font-heading text-grey-8"
          :class="$q.screen.lt.md ? 'text-h6' : 'text-h4'"
        >
          <div>Never miss a post.</div>
          Register for free email newsletters today
        </div>
      </div>

      <div
        class="col-12 col-md-4 flex justify-end items-center"
        :class="$q.screen.lt.md ? 'q-my-lg' : ''"
      >
        <q-btn
          outline
          color="grey-9"
          to="#"
          rounded
          :style="
            $q.screen.lt.sm
              ? 'width: 100%; font-size: 1.2em'
              : 'font-size: 1.2em'
          "
          no-caps
          class="q-px-lg"
        >
          Register
          <Icon icon="ic:round-arrow-right" class="text-h6 q-ml-md" />
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Categories from "src/components/Categories.vue";
import BlogTable from "src/components/blog/BlogTable.vue";

import { usePostsStore } from "src/stores/posts-store";
const postsStore = usePostsStore();
</script>

<style></style>
