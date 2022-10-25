<template>
  <q-page
    class="flex full-width justify-center"
    :class="
      $q.screen.gt.lg
        ? ' q-ma-xl q-px-xl'
        : $q.screen.gt.md
        ? 'q-ma-xl q-px-lg'
        : $q.screen.gt.sm
        ? 'q-ma-lg q-px-lg'
        : $q.screen.gt.xs
        ? 'q-ma-md q-px-sm'
        : 'q-mx-xs q-my-md'
    "
    v-if="postsStore.about"
  >
    <div
      class=""
      style="width: 700px"
      :class="
        $q.screen.gt.lg
          ? 'q-px-md'
          : $q.screen.gt.md
          ? 'q-px-md'
          : $q.screen.gt.sm
          ? 'q-px-md'
          : $q.screen.gt.xs
          ? 'q-px-sm q-mx-sm'
          : 'q-px-md'
      "
    >
      <ResponsiveHeading>{{ postsStore.about.title }}</ResponsiveHeading>

      <ResponsiveText
        v-html="postsStore.about.paragraphOne.html"
        class="text-body1"
      ></ResponsiveText>

      <div class="q-my-md flex justify-center">
        <q-img :src="postsStore.about.featuredImage.url" class="img" />
      </div>

      <ResponsiveText
        v-if="postsStore.about && postsStore.about.paragraphTwo"
        v-html="postsStore.about.paragraphTwo.html"
        class="text-body1"
      ></ResponsiveText>
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
