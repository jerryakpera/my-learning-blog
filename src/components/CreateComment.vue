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
            ref="commentRef"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            type="text"
            standout="bg-teal text-white"
            label="Name"
            :rules="[isRequired]"
            ref="nameRef"
            v-model="name"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            type="text"
            standout="bg-teal text-white"
            label="Email"
            :rules="[isRequired]"
            v-model="email"
            ref="emailRef"
          />
        </div>

        <div class="col-12">
          <q-checkbox
            v-model="saveData"
            label="Save my name and email for the next time I comment"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space class="gt-xs" />

      <q-btn
        color="dark"
        text-color="accent"
        label="Leave Comment"
        :class="$q.screen.lt.sm ? 'full-width' : ''"
        @click="handleCommentSubmission"
        no-caps
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { submitComment } from "../services/submit-comment";

import { useQuasar } from "quasar";
import { computed, onMounted, ref } from "vue";
import { useConfirmation } from "src/common";

const $q = useQuasar();

const name = ref("");
const email = ref("");
const comment = ref("");
const saveData = ref(false);

const props = defineProps(["postSlug"]);

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

const commentRef = ref(null);
const nameRef = ref(null);
const emailRef = ref(null);

const handleCommentSubmission = async () => {
  nameRef.value.validate();
  emailRef.value.validate();
  commentRef.value.validate();

  if (
    nameRef.value.hasError ||
    emailRef.value.hasError ||
    commentRef.value.hasError
  ) {
    return;
  }

  const confirmed = await useConfirmation($q.dialog, "Add comment?");
  if (!confirmed) return;

  const newComment = {
    name: name.value,
    email: email.value,
    comment: comment.value,
    slug: props.postSlug,
  };

  if (saveData.value) {
    localStorage.setItem(
      "comment-details",
      JSON.stringify({
        name: newComment.name,
        email: newComment.email,
      })
    );
  } else {
    localStorage.removeItem("comment-details");
  }

  $q.loading.show();

  try {
    const result = await submitComment(newComment);

    comment.value = "";

    $q.notify({
      message: "Comment submitted for review",
      color: "positive",
    });
  } catch (err) {
    $q.notify({
      message: "Something went wrong. Please try again",
      color: "negative",
    });
  }

  $q.loading.hide();
};

onMounted(() => {
  const commentDetails = JSON.parse(localStorage.getItem("comment-details"));

  if (commentDetails && commentDetails.name) {
    name.value = commentDetails.name;
    email.value = commentDetails.email;
  }
});
</script>

<style></style>
