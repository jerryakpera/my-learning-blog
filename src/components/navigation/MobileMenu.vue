<template>
  <q-btn color="primary" icon="las la-bars" flat dense class="q-ml-sm">
    <q-menu
      dark
      class="full-width bg-dark"
      transition-show="jump-down"
      transition-hide="jump-up"
      :offset="[10, 10]"
    >
      <q-list>
        <q-item
          v-for="link in links"
          :key="link.text"
          exact
          exact-active-class="text-weight-bold text-white bg-primary"
          clickable
          v-close-popup
          :to="link.link"
        >
          <q-item-section>{{ link.text }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
const props = defineProps(["links"]);
</script>
