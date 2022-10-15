<template>
  <div>
    <q-header
      class="bg-grey-1 shadow-1 text-grey-8"
      height-hint="64"
      :class="
        $q.screen.lt.sm
          ? 'q-px-xs'
          : $q.screen.lt.md
          ? 'q-px-sm'
          : $q.screen.lt.lg
          ? 'q-px-lg'
          : 'q-px-xl'
      "
    >
      <q-toolbar class="q-px-none">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="lt-sm"
        />

        <q-toolbar-title shrink class="row items-center no-wrap">
          <router-link
            to="/"
            class="text-primary"
            style="text-decoration: none"
          >
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
    </q-header>

    <MobileDrawer
      :leftDrawerOpen="leftDrawerOpen"
      v-if="$q.screen.lt.sm"
      :links="links"
    />
  </div>
</template>

<script setup>
import MobileMenu from "./MobileMenu.vue";
import MobileDrawer from "./MobileDrawer.vue";

import { ref } from "vue";
import { useQuasar } from "quasar";

const props = defineProps(["links"]);

const $q = useQuasar();

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
