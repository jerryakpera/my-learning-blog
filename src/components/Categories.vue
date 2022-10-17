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
        color="secondary"
        dark
        class="text-weight-bold text-font-one"
        style="text-decoration: none"
      >
        {{ category.name }}
      </q-chip>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps(["categories"]);
</script>
