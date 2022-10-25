<template>
  <div
    class="font-heading text-weight-bold"
    :class="
      $q.screen.gt.md
        ? 'text-h5'
        : $q.screen.gt.xs
        ? 'text-h6'
        : 'text-subtitle1'
    "
  >
    <slot name="default" />
  </div>
</template>

<script></script>
