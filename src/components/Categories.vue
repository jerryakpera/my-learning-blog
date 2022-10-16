<template>
  <div>
    <router-link
      :to="`/categories/${category.slug}`"
      v-for="category in categories"
      :key="category.slug"
    >
      <q-chip
        square
        color="secondary"
        dark
        class="text-weight-bold text-font-one"
      >
        {{ category.name }}
      </q-chip>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps(["categories"]);
</script>
