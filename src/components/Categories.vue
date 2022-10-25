<template>
  <div>
    <router-link
      :to="`/categories/${category.slug}`"
      v-for="category in categories"
      :key="category.slug"
      style="text-decoration: none"
    >
      <q-chip
        square
        color="dark"
        text-color="accent"
        dark
        class="text-weight-bold text-font-one q-px-lg"
        style="text-decoration: none; border-radius: 15px"
      >
        {{ category.name }}
      </q-chip>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps(["categories"]);
</script>
