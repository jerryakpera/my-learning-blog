<template>
  <q-layout view="hHh lpR fFf" class="bg-secondary">
    <AltHeader :links="links" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <Footer :links="links" /> -->
  </q-layout>
</template>

<script setup>
import AltHeader from "src/components/alt-header/AltHeader.vue";

import Footer from "src/components/footer/Footer.vue";
import Header from "src/components/navigation/Header.vue";

const links = [
  {
    text: "Home",
    icon: "las la-home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];
</script>
