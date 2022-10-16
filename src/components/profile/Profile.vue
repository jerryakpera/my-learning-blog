<template>
  <div v-if="profile && profile.name" class="q-mb-md">
    <q-card flat style="width: 450px" class="profile-card" square>
      <q-card-section class="bg-primary q-pa-md flex justify-center">
        <q-avatar size="256px" class="profile-pic">
          <q-img :src="profile.photo.url" fit="cover" height="100%" />
        </q-avatar>
      </q-card-section>
      <q-card-section class="text-center q-mt-md">
        <div
          class="text-h6 text-weight-light q-mt-sm full-width text-uppercase"
        >
          {{ profile.name }}
        </div>

        <div class="flex justify-around q-px-xl q-my-md">
          <a
            :href="`//${profile.facebook}`"
            target="__blank"
            class="text-primary"
          >
            <q-icon name="lab la-facebook" size="md" />
          </a>

          <a :href="`${profile.twitter}`" class="text-primary">
            <q-icon name="lab la-twitter" size="md" />
          </a>

          <a :href="`${profile.instagram}`" class="text-primary">
            <q-icon name="lab la-instagram" size="md" />
          </a>
        </div>

        <div class="text-subtitle2 text-weight-light q-mt-md">
          {{ profile.bio }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps(["profile"]);
</script>

<style lang="scss" scoped>
.profile-card {
  .profile-pic {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
}
</style>
