<script setup lang="ts">
defineProps<{
  type: string;
}>();
</script>
<template>
  <ChevronDown
    v-if="'chevron-down' === type"
    class="h-4 w-4 transition-transform duration-300"
  />
</template>
