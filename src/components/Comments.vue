<template>
  <q-card flat bordered>
    <q-card-section>
      <div v-if="comments.length > 0">
        <div class="text-subtitle2">Comments</div>
        <q-separator spaced="md" />
        <div
          v-for="(comment, i) in comments"
          :key="i"
          flat
          bordered
          class="q-mb-md"
        >
          <div>
            <div>
              <span class="text-weight-bold text-caption">
                {{ comment.name }}
              </span>
              <span class="text-caption text-grey-10">
                on {{ comment.date }}
              </span>
            </div>

            <p>
              {{ comment.comment }}
            </p>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="text-h5">No comments</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { date } from "quasar";
import { onMounted, ref } from "vue";
import { usePostsStore } from "src/stores/posts-store";

const props = defineProps(["slug"]);

const comments = ref([]);

const postsStore = usePostsStore();

const fetchComments = async (slug) => {
  try {
    const result = await postsStore.getCommentsForPost(props.slug);

    return await postsStore.loadResults(result);
  } catch (err) {
    throw err;
  }
};

onMounted(async () => {
  comments.value = await fetchComments(props.slug);
});
</script>

<style></style>
