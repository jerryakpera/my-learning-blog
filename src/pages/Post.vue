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
    :key="componentKey"
  >
    <div class="row q-col-gutter-sm">
      <q-card
        flat
        bordered
        class="bg-secondary q-my-md"
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
        <q-card-section>
          <ResponsiveHeading>{{ post.title }}</ResponsiveHeading>
          <ResponsiveLabel class="q-mb-sm">
            by
            <ProfileDialog :slug="post.author.slug" :name="post.author.name" />
            {{ moment(new Date(post.createdAt)).format("LL") }}
          </ResponsiveLabel>

          <q-card class="q-my-md" flat bordered>
            <q-img
              :src="post.featuredImageOne.url"
              class="post-img"
              fit="cover"
              position="10% 35%"
              style="min-height: 550px"
            />
          </q-card>

          <Categories
            :categories="post.categories"
            class="q-px-none q-mx-none q-my-sm"
          />

          <div v-html="post.contentOne.html" class="text-body1"></div>

          <q-card class="q-my-md" flat bordered v-if="post.featuredImageTwo">
            <q-img
              :src="post.featuredImageTwo.url"
              class="post-img"
              fit="cover"
              position="10% 35%"
              style="min-height: 550px"
            />
          </q-card>
          <div
            v-html="post.contentTwo.html"
            class="text-body1"
            v-if="post.contentTwo"
          ></div>

          <q-card class="q-my-md" flat bordered v-if="post.featuredImageThree">
            <q-img
              :src="post.featuredImageThree.url"
              class="post-img"
              fit="cover"
              position="10% 35%"
              style="min-height: 550px"
            />
          </q-card>
          <div
            v-html="post.contentThree.html"
            class="text-body1"
            v-if="post.contentThree"
          ></div>

          <q-card class="q-my-md" flat bordered v-if="post.featuredImageFour">
            <q-img
              :src="post.featuredImageFour.url"
              class="post-img"
              fit="cover"
              position="10% 35%"
              style="min-height: 550px"
            />
          </q-card>
          <div
            v-html="post.contentFour.html"
            class="text-body1"
            v-if="post.contentFour"
          ></div>
        </q-card-section>

        <div class="flex justify-end q-my-md">
          <q-btn
            :href="facebookURL"
            target="_black"
            color="dark"
            unelevated
            text-color="accent"
          >
            Share
            <Icon icon="brandico:facebook-rect" class="q-ml-md" />
          </q-btn>

          <q-btn
            :href="twitterURL"
            target="_black"
            color="dark"
            unelevated
            text-color="accent"
            class="q-ml-sm"
          >
            Share
            <Icon icon="entypo-social:twitter" class="q-ml-md" />
          </q-btn>
        </div>

        <CreateComment class="q-my-lg" :postSlug="post.slug" />

        <Comments :slug="post.slug" />
      </q-card>

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
          <div>
            <div class="text-subtitle2">All Categories</div>
            <SFacebook
              @popup-open="onOpen"
              @popup-close="onClose"
              @popup-block="onBlock"
              @popup-focus="onFocus"
              :share-options="shareOptions"
              :window-features="windowFeatures"
              :use-native-behavior="useNativeBehavior"
            >
              <!-- your icon component -->
              <q-btn label="Share" />
            </SFacebook>
            <Categories :categories="postsStore.categories" />
          </div>
        </div>

        <ResponsiveHeading class="text-subtitle2 col-12 q-mt-none"
          >Recent Posts</ResponsiveHeading
        >
        <div class="col-12">
          <BlogTable :posts="postsStore.recentPosts" :sidebar="true" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import moment from "moment";
import { SFacebook } from "vue-socials";

import Comments from "src/components/Comments.vue";
import Categories from "src/components/Categories.vue";
import BlogTable from "src/components/blog/BlogTable.vue";
import CreateComment from "src/components/CreateComment.vue";
import ProfileDialog from "src/components/profile/ProfileDialog.vue";

import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";

import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["slug"]);

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const postsStore = usePostsStore();

const url = ref("");
const twitterURL = ref("");
const linkedinURL = ref("");
const componentKey = ref(0);
const facebookURL = ref("");
const urlText = ref("Share on FB");

const encodedURL = computed(() => {
  return encodeURIComponent(url.value);
});

const encodedText = computed(() => {
  return encodeURIComponent(urlText.value);
});

const slug = computed(() => props.slug);
const post = computed(() => postsStore.post);

const fitModes = ["cover", "fill", "contain", "none", "scale-down"];

const onOpen = () => {};
const onClose = () => {};
const onBlock = () => {};
const onFocus = () => {};

const shareOptions = {
  url: "https://pashys-blog.web.app/post/psalms-one-four-five-verse-four",
  quote: "Quote",
  hashtag: "#CherishedLife",
};
const windowFeatures = {};
const useNativeBehavior = false;

const generateURLs = () => {
  facebookURL.value =
    "http://www.facebook.com/sharer/sharer.php?u=" +
    encodedURL.value +
    "&title=" +
    encodedText.value;

  twitterURL.value =
    "https://twitter.com/intent/tweet?text=" +
    encodedText.value +
    "&url=" +
    encodedURL.value;
};

const fetchPost = async (slug) => {
  const postResult = await postsStore.getPostBySlug(slug);

  let posts = await postsStore.getPosts();
  posts = await postsStore.loadPosts(posts);

  postsStore.recentPosts = [...posts]
    .filter((pst) => pst.slug !== props.slug)
    .splice(0, 4);

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
  componentKey.value += 1;
});

onMounted(async () => {
  url.value = `https://pashys-blog.web.app/${route.fullPath}`;

  generateURLs();

  $q.loading.show();

  await fetchPost(props.slug);

  route.matched.map((r, i) => {
    document.title = post.value.title;
  });

  componentKey.value += 1;

  $q.loading.hide();
});
</script>

<style lang="scss" scoped>
.post-img {
  max-height: 400px;
}

.post-image {
  height: 400px;
  border-radius: 7px;
  background-size: cover;
  background-position: center;
}
</style>
