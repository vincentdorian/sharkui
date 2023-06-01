<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
const { page } = useContent();

useContentHead(page);
</script>
<template>
  <NuxtLayout name="sidebar">
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
          <div class="font-medium text-foreground">
            {{ page.title }}
          </div>
        </div>
        <div class="space-y-2">
          <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
            {{ page.title }}
          </h1>
          <p
            v-if="page.description"
            class="text-lg text-muted-foreground"
          >
            {{ page.description }}
          </p>
          <div
            data-orientation="horizontal"
            role="none"
            class="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
          />
        </div>
        <div class="flex w-full items-center space-x-2 pt-4">
          <ContentDoc class="nuxt-content w-full" />
        </div>
        <Pager class="mt-8 border-t pt-6" />
      </div>
    </main>
  </NuxtLayout>
</template>
