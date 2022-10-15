<template>
  <q-page>
    <!-- {{ postsStore.welcomeScreen }} -->
    <WelcomeBanner
      :post="postsStore.welcomeScreen"
      v-if="postsStore.welcomeScreen"
    />
    <BlogPost
      v-for="(post, i) in postsStore.featuredPosts"
      :key="i"
      :post="post"
    />

    <q-separator :class="$q.screen.lt.sm ? 'q-mt-xs' : 'q-mt-xl'" />

    <div class="blog-card-wrap q-my-xl">
      <div :class="$q.screen.lt.md ? 'q-px-sm' : 'q-px-xl'">
        <div class="text-h3 h3 q-ml-sm q-mt-lg">View More Recent Blogs</div>
        <div class="blog-cards row">
          <div
            class="col-12 col-lg-3 col-md-4 col-sm-6 q-pa-sm"
            v-for="(post, i) in postsStore.recentPosts"
            :key="i"
          >
            <BlogCard :post="post" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="updates bg-grey-4"
      :class="$q.screen.lt.sm ? 'q-py-lg q-px-lg' : 'q-py-xl q-px-xl'"
    >
      <div class="row">
        <div class="col-12 col-md-8">
          <div :class="$q.screen.lt.md ? 'text-h6' : 'text-h4'">
            Never miss a post. Register for free email newsletters today
          </div>
        </div>

        <div
          class="col-12 col-md-4 flex flex-center"
          :class="$q.screen.lt.md ? 'q-my-lg' : ''"
        >
          <q-btn
            outline
            color="primary"
            to="#"
            rounded
            label="Register for Pasys! Blog"
            icon-right="las la-arrow-right"
            :style="
              $q.screen.lt.sm
                ? 'width: 100%; font-size: 1.2em'
                : 'font-size: 1.2em'
            "
            no-caps
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Editor from "../components/Editor.vue";
import BlogPost from "../components/blog/BlogPost.vue";
import BlogCard from "../components/blog/BlogCard.vue";
import WelcomeBanner from "../components/blog/WelcomeBanner.vue";

import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";

import { usePostsStore } from "stores/posts-store";

const $q = useQuasar();
const postsStore = usePostsStore();
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
