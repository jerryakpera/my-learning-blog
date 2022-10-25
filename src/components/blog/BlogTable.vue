<template>
  <q-table
    grid
    :rows="[...posts]"
    row-key="name"
    :filter="filter"
    hide-header
    :rows-per-page-options="[8]"
    :pagination="pagination"
  >
    <template v-slot:top-right v-if="!sidebar">
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template v-slot:item="props">
      <div
        class="grid-style-transition q-gutter-xs"
        :class="
          $q.screen.gt.lg
            ? 'col-3 q-pa-md'
            : $q.screen.gt.md
            ? 'col-3 q-pa-sm'
            : $q.screen.gt.sm
            ? 'col-4 q-pa-sm'
            : $q.screen.lt.sm
            ? 'col-6 q-pa-xs'
            : 'col-6 q-pa-sm '
        "
        v-if="!sidebar"
      >
        <AltBlogCard :post="props.row" />
      </div>
      <div
        class="grid-style-transition q-gutter-xs q-my-sm"
        :class="$q.screen.lt.md ? 'col-4 q-pr-sm' : 'col-12'"
        v-else
      >
        <AltBlogCard :post="props.row" />
      </div>
    </template>

    <template v-slot:pagination="scope">
      <q-btn
        v-if="scope.pagesNumber > 2"
        icon="first_page"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.firstPage"
      />

      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.prevPage"
      />

      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.nextPage"
      />

      <q-btn
        v-if="scope.pagesNumber > 2"
        icon="last_page"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.lastPage"
      />
    </template>
  </q-table>
</template>

<script setup>
import AltBlogCard from "src/components/blog/AltBlogCard.vue";

import { ref, computed } from "vue";

const props = defineProps(["posts", "sidebar"]);

const filter = ref();
const current = ref(1);

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 12,
});

const pagesNumber = computed(() => {
  return Math.ceil(rows.length / pagination.value.rowsPerPage);
});
</script>
