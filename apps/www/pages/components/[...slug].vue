<script setup lang="ts">
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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
          <div class="flex items-center space-x-2 pt-4">
            <a
              v-if="page.shadcnui"
              :href="page.shadcnui"
              :class="
                cn('font-semibold', badgeVariants({ variant: 'secondary' }))
              "
            >
              <svg
                class="mr-1 inline-block h-3 w-3"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
              </svg>
              shadcn/ui {{ page.title }}
            </a>

            <a
              v-if="page.arkui"
              :href="page.arkui"
              :class="
                cn('font-semibold', badgeVariants({ variant: 'secondary' }))
              "
            >
              Ark UI Reference
            </a>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            class="my-4 h-[1px] w-full shrink-0 bg-border md:my-6"
          />
        </div>
        <!-- <ComponentExample v-if="page.component" :align="page.component.align">
          <template #preview>
            <Demo :component-name="page.component.name" />
          </template>
          <template #code> No code preview available </template>
        </ComponentExample> -->
        <div class="flex w-full items-center space-x-2 pt-4">
          <ContentDoc class="nuxt-content w-full" />
        </div>
        <Pager class="mt-8 border-t pt-6" />
      </div>
    </main>
  </NuxtLayout>
</template>
