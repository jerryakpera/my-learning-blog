<template>
  <q-page
    v-if="post && post.title"
    :class="
      $q.screen.gt.md
        ? 'q-px-xl q-mx-md q-py-md'
        : $q.screen.gt.sm
        ? 'q-px-lg q-mx-sm q-py-md'
        : $q.screen.gt.xs
        ? 'q-px-md q-mx-xs q-py-md'
        : 'q-px-sm q-my-md'
    "
  >
    <div class="row q-col-gutter-sm">
      <div
        :class="
          $q.screen.gt.lg
            ? 'col-9 q-pr-md'
            : $q.screen.gt.md
            ? 'col-9 q-pr-md'
            : $q.screen.gt.sm
            ? 'col-8 q-pr-md'
            : 'col-12 q-pr-sm'
        "
      >
        <div class="text-h6">{{ post.title }}</div>

        <q-card class="q-my-none">
          <q-img :src="post.featuredImage.url" class="post-img" />
        </q-card>

        <ProfileDialog :slug="post.author.slug" :name="post.author.name" />
        <div class="q-mb-sm">
          {{ moment(new Date(post.createdAt)).format("LL") }}
        </div>

        <Categories
          :categories="post.categories"
          class="q-px-none q-mx-none q-my-sm"
        />

        <div v-html="post.content.html" class="text-body1"></div>

        <Comment class="q-my-lg" :postSlug="post.slug" />
      </div>

      <div
        :class="
          $q.screen.gt.lg
            ? 'col-3'
            : $q.screen.gt.md
            ? 'col-3'
            : $q.screen.gt.sm
            ? 'col-4'
            : 'col-12 row'
        "
      >
        <div
          class="q-mb-md full-width"
          v-if="postsStore.categories && postsStore.categories.length > 0"
        >
          <q-card class="full-width" style="width: 100%" flat bordered>
            <q-toolbar>
              <q-toolbar-title class="text-subtitle1 text-weight-bold">
                All Categories
              </q-toolbar-title>
            </q-toolbar>
            <q-card-section class="q-pa-sm">
              <Categories :categories="postsStore.categories" />
            </q-card-section>
          </q-card>
        </div>

        <div class="text-h6 col-12 q-mt-none">Recent Posts</div>
        <div
          class="col-12 col-lg-3 col-md-4 col-sm-6"
          v-for="(post, i) in postsStore.recentPosts.splice(0, 4)"
          :key="i"
        >
          <BlogCard :post="post" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import moment from "moment";

import Comment from "src/components/Comment.vue";
import Categories from "src/components/Categories.vue";
import BlogCard from "src/components/blog/BlogCard.vue";
import ProfileDialog from "src/components/profile/ProfileDialog.vue";

import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { computed, onMounted, ref, toRef, watch } from "vue";

import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["slug"]);

const $q = useQuasar();
const router = useRouter();
const postsStore = usePostsStore();

const post = computed(() => postsStore.post);
const slug = computed(() => props.slug);

const fetchPost = async (slug) => {
  const postResult = await postsStore.getPostBySlug(slug);

  let posts = await postsStore.getPosts();
  posts = await postsStore.loadPosts(posts);

  postsStore.recentPosts = [...posts].splice(0, 4);

  if (!postResult) {
    $q.notify({
      message: "Post could not be loaded",
      color: "dark",
    });

    router.go(-1);
    return;
  }

  postsStore.post = postResult;
};

watch(slug, async (current, old) => {
  await fetchPost(current);
});

onMounted(async () => {
  $q.loading.show();

  await fetchPost(props.slug);

  $q.loading.hide();
});
</script>

<style lang="scss" scoped>
img,
.post-img {
  max-height: 360px;
}
</style>
