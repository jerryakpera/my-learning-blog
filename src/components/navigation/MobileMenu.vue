<template>
  <q-btn round flat icon="las la-bars" text-color="black" dense>
    <q-menu auto-close :offset="[0, 20]" fit>
      <q-list separator style="width: 95vw; overflow: hidden">
        <q-item clickable>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Posts</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable>
          <q-item-section>Create Posts</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup></script>
