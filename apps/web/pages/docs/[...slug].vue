<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

const { page } = useContent();

useContentHead(page);

definePageMeta({
  layout: "sidebar",
});
</script>
<template>
  <NuxtLayout>
    <main
      class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
    >
      <div class="mx-auto w-full min-w-0">
        <div
          class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground"
        >
          <div class="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRight class="h-4 w-4" />
          <div class="font-medium text-foreground">{{ page.title }}</div>
        </div>
        <div className="space-y-2">
          <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
            {{ page.title }}
          </h1>
          <p v-if="page.description" className="text-lg text-muted-foreground">
            {{ page.description }}
          </p>
        </div>
        <div class="flex items-center space-x-2 pt-4">
          <ContentDoc />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
