<template>
  <q-page
    class="flex full-width"
    :class="
      $q.screen.gt.lg
        ? ' q-ma-xl q-px-xl justify-center'
        : $q.screen.gt.md
        ? 'q-ma-xl q-px-lg justify-center'
        : $q.screen.gt.sm
        ? 'q-ma-lg q-px-lg justify-center '
        : $q.screen.gt.xs
        ? 'q-ma-md q-px-sm justify-center'
        : 'q-mx-xs q-my-md justify-center'
    "
  >
    <div
      style="width: 700px"
      :class="
        $q.screen.gt.lg
          ? 'q-px-md'
          : $q.screen.gt.md
          ? 'q-px-md'
          : $q.screen.gt.sm
          ? 'q-px-md'
          : $q.screen.gt.xs
          ? 'q-px-sm q-mx-sm'
          : 'q-px-md'
      "
    >
      <ResponsiveHeading>{{ postsStore.contact.title }}</ResponsiveHeading>
      <ResponsiveText>
        {{ postsStore.contact.content }}
      </ResponsiveText>
      <div class="row q-col-gutter-sm q-mt-md">
        <div class="col-12 col-sm-6">
          <q-input label="Name" outlined v-model="name" class="font-body" />
        </div>
        <div class="col-12 col-sm-6">
          <q-input label="Email" outlined class="font-body" v-model="email" />
        </div>
        <div class="col-12">
          <q-input
            label="Comment"
            outlined
            type="textarea"
            class="font-body"
            v-model="comment"
          />
        </div>

        <div class="full-width flex">
          <q-btn
            label="Submit"
            class="full-width"
            color="dark"
            text-color="accent"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import { usePostsStore } from "src/stores/posts-store";

const postsStore = usePostsStore();

const name = ref("");
const email = ref("");
const comment = ref("");
</script>
