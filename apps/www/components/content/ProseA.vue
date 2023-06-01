<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
});
</script>
<template>
  <NuxtLink
    class="font-medium underline underline-offset-4"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>
