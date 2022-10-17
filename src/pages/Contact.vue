<template>
  <q-page
    class="flex full-width"
    :class="
      $q.screen.gt.lg
        ? ' q-ma-xl q-px-xl flex-center'
        : $q.screen.gt.md
        ? 'q-ma-xl q-px-lg flex-center'
        : $q.screen.gt.sm
        ? 'q-ma-lg q-px-lg flex-center '
        : $q.screen.gt.xs
        ? 'q-ma-md q-px-sm justify-center'
        : 'q-mx-xs q-my-md justify-center'
    "
  >
    <div
      class=""
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
      <div class="text-h5">Get in touch</div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
      dolor quaerat, asperiores eveniet magnam earum! Fuga sit quibusdam fugiat
      nesciunt!
      <div class="row q-col-gutter-sm q-mt-md">
        <div class="col-12 col-sm-6">
          <q-input label="Name" outlined v-model="name" />
        </div>
        <div class="col-12 col-sm-6">
          <q-input label="Email" outlined />
        </div>
        <div class="col-12">
          <q-input label="Comment" outlined type="textarea" />
        </div>

        <div class="full-width flex">
          <q-btn label="Submit" class="full-width" color="primary" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
</script>
