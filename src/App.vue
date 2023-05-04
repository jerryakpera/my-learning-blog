<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import { usePostsStore } from "src/stores/posts-store";

const $q = useQuasar();
const postsStore = usePostsStore();

onMounted(async () => {
  $q.loading.show();

  try {
    await postsStore.loadAppData();
  } catch (err) {
    $q.notify({
      message: err,
      color: "dark",
    });
  }

  $q.loading.hide();
});
</script>
