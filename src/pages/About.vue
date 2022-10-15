<template>
  <q-page
    class="flex full-width justify-center q-ma-xl q-px-xl"
    v-if="postsStore.about"
  >
    <div class="q-px-md" style="width: 700px">
      <div class="text-h5">{{ postsStore.about.title }}</div>
      <div>
        {{ postsStore.about.paragraphOne }}
      </div>
      <div class="q-my-md flex justify-center">
        <q-img :src="postsStore.about.featuredImage.url" class="img" />
      </div>
      <div>
        {{ postsStore.about.paragraphTwo }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { usePostsStore } from "stores/posts-store";

const postsStore = usePostsStore();
</script>

<style lang="scss" scoped>
.img {
  border-radius: 10px;
  // border-top-right-radius: 10px;
  // display: block;
  // width: 100%;
  // height: 100%;
  object-fit: cover;
}
</style>
