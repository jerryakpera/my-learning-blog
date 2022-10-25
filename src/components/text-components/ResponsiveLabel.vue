<template>
  <div
    class="font-body"
    :class="$q.screen.lt.sm ? 'text-caption' : 'text-body2'"
  >
    <slot name="default" />
  </div>
</template>

<script></script>
