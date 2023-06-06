<script setup lang="ts">
defineProps<{
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
  meta?: string;
}>();
</script>
<template>
  <div class="relative rounded-lg border text-sm [&:not(:first-child)]:mt-6">
    <div class="max-h-[350px] overflow-auto p-4">
      <slot />
    </div>
    <div class="absolute right-4 top-4">
      <CopyButton :value="code" />
    </div>
  </div>
</template>
<style scoped>
pre code .line {
}
</style>
