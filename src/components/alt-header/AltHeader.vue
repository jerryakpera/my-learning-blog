<template>
  <q-header class="bg-accent q-py-lg">
    <q-toolbar class="q-px-md">
      <AltMobileMenu class="lt-sm" :links="links" />

      <q-toolbar-title shrink class="row items-center no-wrap">
        <router-link
          to="/"
          class="text-grey-8 font-heading text-h4"
          style="text-decoration: none"
        >
          <div class="q-mb-none">
            <span class="text-grey-10">Cherished</span>
            <span class="text-weight-light">Life</span>
          </div>
          <ResponsiveText class="q-mt-none"
            >A blog for the Christian female</ResponsiveText
          >
        </router-link>
      </q-toolbar-title>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap gt-xs">
        <template v-for="link in links" :key="link.text">
          <RouterLink
            v-if="link.link"
            :to="link.link"
            exact
            exact-active-class="text-grey-10"
            class="text-grey-8"
            style="text-decoration-none"
          >
            <q-btn
              flat
              size="sm"
              :label="link.text"
              class="font-body"
              style="font-size: 0.8em"
            />
          </RouterLink>
          <q-btn
            color="grey-8"
            style="font-size: 0.8em"
            class="font-body"
            flat
            :label="link.text"
            v-if="!link.link"
          >
            <q-menu :offset="[0, 20]">
              <q-list style="min-width: 235px" class="bg-dark text-accent" dark>
                <q-item
                  exact
                  exact-active-class="text-dark bg-accent"
                  clickable
                  v-close-popup
                  v-for="category in categories"
                  :key="category.name"
                  :to="`/categories/${category.slug}`"
                >
                  <q-item-section>
                    {{ category.name }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </template>
      </div>

      <q-space />

      <q-btn
        flat
        round
        href="https://web.facebook.com/profile.php?id=100073563129524"
        target="_blank"
      >
        <Icon icon="brandico:facebook-rect" class="text-grey-8 text-h5" />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import AltMobileMenu from "./AltMobileMenu.vue";

import { usePostsStore } from "src/stores/posts-store";
import { computed } from "vue";

const props = defineProps(["links"]);

const postsStore = usePostsStore();

const categories = computed(() => postsStore.categories);
</script>
