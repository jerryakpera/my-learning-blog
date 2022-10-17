<template>
  <q-header class="bg-grey-1 text-grey-8">
    <q-toolbar class="q-px-sm">
      <MobileMenu class="lt-sm" :links="links" />

      <q-toolbar-title shrink class="row items-center no-wrap">
        <router-link to="/" class="text-primary" style="text-decoration: none">
          <span class="text-weight-bold"> Pashys! </span>
          <span> Blog</span>
        </router-link>
      </q-toolbar-title>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap gt-xs">
        <template v-for="link in links" :key="link.text">
          <q-btn
            v-if="link.icon"
            flat
            size="sm"
            text-color="primary"
            :icon="link.icon"
            :to="link.link"
          />

          <q-btn
            v-else
            outline
            size="sm"
            text-color="primary"
            :label="link.text"
            :to="link.link"
          />
        </template>
      </div>
    </q-toolbar>

    <q-toolbar class="bg-primary q-py-none">
      <q-btn
        unelevated
        dense
        icon="las la-arrow-left"
        label="Back"
        class="q-mr-sm"
        color="primary"
        text-color="white"
        @click="router.go(-1)"
      />
      <q-separator dark vertical inset spaced="md" />
      <q-btn
        unelevated
        dense
        icon-right="las la-arrow-right"
        label="Forward"
        class="q-mr-sm"
        color="primary"
        text-color="white"
        @click="router.go(1)"
      />

      <q-space />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import MobileMenu from "./MobileMenu.vue";
import MobileDrawer from "./MobileDrawer.vue";

import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const props = defineProps(["links"]);

const $q = useQuasar();
const router = useRouter();

const search = ref("");
const leftDrawerOpen = ref(false);

const changeDate = (option) => {
  byDate.value = option;
  showDateOptions.value = false;
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
