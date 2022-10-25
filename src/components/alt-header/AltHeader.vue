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
          <span class="text-grey-10">Cherished</span>
          <span class="text-weight-light">Life</span>
        </router-link>
      </q-toolbar-title>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap gt-xs">
        <template v-for="link in links" :key="link.text">
          <q-btn
            flat
            size="sm"
            text-color="grey-8"
            :label="link.text"
            :to="link.link"
            class="font-body"
            style="font-size: 0.8em"
          />
        </template>
      </div>

      <q-space />

      <q-btn flat round>
        <Icon icon="brandico:facebook-rect" class="text-grey-8 text-h5" />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import AltMobileMenu from "./AltMobileMenu.vue";

const props = defineProps(["links"]);
</script>
