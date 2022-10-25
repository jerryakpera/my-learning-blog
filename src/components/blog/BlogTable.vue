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
    <template v-slot:top-right>
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
        class="col-xs-6 col-sm-4 col-md-3 col-lg-3 grid-style-transition q-gutter-xs"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
        :class="$q.screen.lt.sm ? 'q-pa-sm' : 'q-pa-md '"
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

const props = defineProps(["posts"]);

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
