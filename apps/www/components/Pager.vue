<script setup lang="ts">
import { ChevronLeftIcon } from "lucide-vue-next";
import { ChevronRightIcon } from "lucide-vue-next";

import { buttonVariants } from "./ui/button";

const { page } = useContent();

const [prev, next] = await queryContent()
  .only(["_path", "title"])
  .sort({ position: 1 })
  .findSurround(page.value._path);
</script>
<template>
  <div class="flex flex-row items-center justify-between">
    <NuxtLink
      v-if="prev"
      :href="prev._path"
      :class="buttonVariants({ variant: 'outline' })"
    >
      <ChevronLeftIcon class="mr-2 h-4 w-4" />
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :href="next._path"
      :class="buttonVariants({ variant: 'outline' })"
    >
      {{ next.title }}
      <ChevronRightIcon class="ml-2 h-4 w-4" />
    </NuxtLink>
  </div>
</template>
