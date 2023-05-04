<template>
  <q-layout view="hHh lpR fFf" class="bg-secondary">
    <AltHeader :links="links" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AltHeader from "src/components/alt-header/AltHeader.vue";

import { onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePostsStore } from "src/stores/posts-store";

const route = useRoute();
const router = useRouter();

const postsStore = usePostsStore();

const links = [
  {
    text: "Home",
    icon: "las la-home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Categories",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const currentPath = computed(() => route.path);

const getCategory = () => {
  const fullPath = route.fullPath.split("/");
  const slug = fullPath[2];

  return postsStore.categories.find((cat) => cat.slug === slug);
};

const setSiteTitle = () => {
  route.matched.map((r, i) => {
    let { path, name } = r;

    if (name === "Categories") {
      const cat = getCategory();

      document.title = `CherishedLife | ${cat ? cat.name : "Category"}`;
      return;
    }

    document.title = `CherishedLife | ${name}`;
  });
};

watch(currentPath, (current, old) => {
  setSiteTitle();
});

onMounted(async () => {
  await router.isReady();
  setSiteTitle();
});
</script>
