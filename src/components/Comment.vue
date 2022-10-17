<template>
  <q-card flat bordered>
    <q-toolbar>
      <q-toolbar-title class="text-subtitle1 text-weight-bold">
        Leave a comment
      </q-toolbar-title>
    </q-toolbar>

    <q-separator />

    <q-card-section class="q-pa-sm">
      <div class="row q-col-gutter-sm">
        <div class="col-12">
          <q-input
            type="textarea"
            standout="bg-teal text-white"
            autogrow
            label="Comment"
            v-model="comment"
            :rules="[isRequired, maxLength, noLink]"
            counter
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            type="text"
            standout="bg-teal text-white"
            label="Name"
            :rules="[isRequired]"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            type="text"
            standout="bg-teal text-white"
            label="Email"
            :rules="[isRequired]"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space class="gt-xs" />

      <q-btn
        color="primary"
        label="Leave Comment"
        :class="$q.screen.lt.sm ? 'full-width' : ''"
        @click="handleCommentSubmission"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";

const comment = ref("");

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const urlRegex = new RegExp(/^http[s]?:\/\/.*?\/([a-zA-Z-_]+).*$/);

const isRequired = computed(() => (val) => !!val || "Field is required");
const maxLength = computed(
  () => (val) => val.length < 1028 || "Comment is too long"
);
const minLength = computed(
  () => (val) => val.length > 10 || "Comment is too short"
);
const isEmail = computed(
  () => (val) => emailRegex.test(val) || "Enter a valid email address"
);
const noLink = computed(
  () => (val) => !urlRegex.test(val) || "No links allowed"
);

const handleCommentSubmission = async () => {};
</script>

<style></style>
