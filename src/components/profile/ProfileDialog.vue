<template>
  <span>
    <span
      class="cursor-pointer font-body text-dark text-weight-bold"
      @click="openProfile(slug)"
    >
      {{ name }}
    </span>

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-space />

          <q-btn icon="las la-times" flat round dense v-close-popup />
        </q-card-section>

        <Profile
          :profile="usersStore.profile"
          v-if="usersStore.profile && usersStore.profile.name"
        />
      </q-card>
    </q-dialog>
  </span>
</template>

<script setup>
import Profile from "./Profile.vue";

import { ref } from "vue";
import { useQuasar } from "quasar";
import { useUsersStore } from "src/stores/users-store";

const props = defineProps(["slug", "name"]);

const $q = useQuasar();
const usersStore = useUsersStore();

const dialog = ref(false);

const openProfile = async (slug) => {
  $q.loading.show();

  const profile = await usersStore.getAuthorsProfile(slug);
  if (!profile) return;

  usersStore.profile = profile;
  dialog.value = true;

  $q.loading.hide();
};
</script>

<style lang="scss" scoped>
.profile-card {
  .profile-pic {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
}
</style>
