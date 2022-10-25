<template>
  <div
    class="font-body"
    :class="
      $q.screen.gt.md
        ? 'text-subtitle1'
        : $q.screen.gt.xs
        ? 'text-body1'
        : 'text-body2'
    "
  >
    <slot name="default" />
  </div>
</template>

<script></script>
