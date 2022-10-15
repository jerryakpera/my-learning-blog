<template>
  <q-card class="blog-card q-mb-lg">
    <q-img :src="post.featuredImage.url" height="260px" />
    <q-card-section style="min-height: 170px">
      <div class="text-subtitle1">
        {{ post.title }}
      </div>
      <div class="text-body2">
        {{ post.date }}
      </div>

      <q-separator spaced="md" />

      <div class="text-body2">{{ post.excerpt }}...</div>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md">
      <q-space />
      <router-link :to="`/post/${post.slug}`">
        <q-btn
          label="View Post"
          icon-right="las la-arrow-right"
          color="primary"
          size="sm"
          unelevated
          rounded
        />
      </router-link>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["post"]);

const postsStore = usePostsStore();

const editPost = computed(() => postsStore.editPost);
</script>

<style scoped lang="scss">
.blog-card {
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-0.21deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0,
      2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

.icon {
  transition: 0.5s ease all;

  &.edit,
  &.delete {
    &:hover {
      background-color: $dark !important;
      color: #fff !important;
    }
  }

  // &.delete {
  //   &:hover {
  //     background-color: red !important;
  //     color: #fff !important;
  //   }
  // }
}
</style>
