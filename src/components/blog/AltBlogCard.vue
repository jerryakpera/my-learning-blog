<template>
  <q-card class="blog-card bg-secondary" bordered flat>
    <q-img
      :src="post.featuredImage.url"
      :style="
        $q.screen.gt.md
          ? 'height: 280px'
          : $q.screen.gt.sm
          ? 'height: 220px'
          : $q.screen.gt.xs
          ? 'height: 205px'
          : 'height: 180px'
      "
      fit="cover"
    >
      <div
        class="absolute-bottom text-subtitle2 font-body"
        style="padding: 0 !important"
        :style="
          $q.screen.gt.md
            ? 'padding: 10px'
            : $q.screen.gt.sm
            ? 'padding: 8px'
            : $q.screen.gt.xs
            ? 'padding: 6px'
            : 'padding: 3px'
        "
      >
        <router-link
          :to="`/post/${post.slug}`"
          style="text-decoration: none"
          class="text-grey-4 blog-card-link"
        >
          {{ post.title }}
        </router-link>

        <div class="flex justify-end text-grey-6 text-caption">
          {{ post.date }}
        </div>
      </div>
    </q-img>
  </q-card>
</template>

<script setup>
import { computed } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["post"]);

const postsStore = usePostsStore();

const editPost = computed(() => postsStore.editPost);
</script>

<style lang="scss" scoped>
.blog-card-link {
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white !important;
  }
}
</style>
