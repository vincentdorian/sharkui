<script setup lang="ts">
defineProps<{
  code: string;
}>();
</script>
<template>
  <code class="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
    <slot />
  </code>
</template>
<style>
pre code .line {
}
</style>
