<template>
  <footer
    class="bg-dark text-white q-px-xl q-py-md row justify-between items-center footer"
    :class="$q.screen.lt.md ? 'q-pb-xl' : ''"
  >
    <div class="col-12 flex justify-center q-pb-md">
      <q-btn icon="lab la-facebook" round flat color="primary" dense />
      <q-btn icon="lab la-twitter" round flat color="primary" dense />
    </div>

    <div
      class="col-12 col-md-8"
      :class="$q.screen.lt.md ? 'text-center q-pb-sm' : ''"
    >
      Copyright &copy; {{ currentYear }}, All Right Reserved
    </div>

    <div
      class="flex"
      :class="
        $q.screen.lt.md ? 'col-12 justify-center' : 'col-4 justify-between'
      "
    >
      <router-link
        v-for="link in links"
        :key="link.text"
        :to="link.link"
        class="text-white"
        :class="$q.screen.lt.md ? 'q-mx-sm' : ''"
        style="text-decoration: none"
      >
        {{ link.text }}
      </router-link>
    </div>
  </footer>
</template>

<script setup>
import moment from "moment";

import { useQuasar } from "quasar";

import { computed } from "vue";

const props = defineProps(["links"]);

const $q = useQuasar();

const currentYear = computed(() => moment().format("YYYY"));
</script>
