<template>
  <q-page>
    <WelcomeBanner
      v-if="postsStore.welcomeScreen"
      :post="postsStore.welcomeScreen"
    />

    <div>
      <q-card-section :class="$q.screen.lt.sm ? 'q-pa-xs' : 'q-pa-sm'">
        <BlogTable title="Recent Posts" :posts="postsStore.recentPosts" />
      </q-card-section>
    </div>

    <div>
      <q-card-section :class="$q.screen.lt.sm ? 'q-pa-xs' : 'q-pa-sm'">
        <BlogTable title="Daily Verses" :posts="dailyVerses" />
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

import BlogTable from "../components/blog/BlogTable.vue";
import WelcomeBanner from "../components/blog/WelcomeBanner.vue";

import { usePostsStore } from "stores/posts-store";

const $q = useQuasar();
const postsStore = usePostsStore();

// const recentPosts = computed(() => {
//   const
// })
const dailyVerses = computed(() => postsStore.dailyVerses.splice(0, 4));
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  .h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
