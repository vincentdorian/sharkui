<script setup lang="ts">
import { useRuntimeConfig } from "#imports";

defineProps<{ id?: string }>();
const heading = 2;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
<template>
  <h2
    :id="id"
    class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-4"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
