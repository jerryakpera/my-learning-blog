<template>
  <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-2" :width="260">
    <q-scroll-area class="fit">
      <q-list padding separator>
        <q-item v-for="link in links" :key="link.text" v-ripple clickable>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
const props = defineProps(["leftDrawerOpen", "links"]);
</script>
