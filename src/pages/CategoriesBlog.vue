<template>
  <q-page class="q-px-xl">
    <q-table
      grid
      :title="slug"
      :rows="[...postsStore.categoryPosts]"
      row-key="name"
      :filter="filter"
      hide-header
      :rows-per-page-options="[12]"
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
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <BlogCard :post="props.row" />
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
  </q-page>
</template>

<script setup>
import BlogCard from "../components/blog/BlogCard.vue";

import { useQuasar } from "quasar";
import { ref, computed, onMounted } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const prop = defineProps(["slug"]);

const $q = useQuasar();
const postsStore = usePostsStore();

const filter = ref();
const current = ref(1);

const posts = ref(null);

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 12,
});

const pagesNumber = computed(() => {
  return Math.ceil(rows.length / pagination.value.rowsPerPage);
});

onMounted(async () => {
  $q.loading.show();

  try {
    let posts = await postsStore.getPostsByCategory(prop.slug);
    posts = await postsStore.loadPosts(posts);

    postsStore.categoryPosts = [...posts];
  } catch (err) {
    $q.notify({
      message: err,
      color: "dark",
    });
  }

  $q.loading.hide();
});
</script>

<style></style>
