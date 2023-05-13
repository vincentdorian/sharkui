<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import DefaultLayout from "./default.vue";

const contentNavigation: {
  label: string;
  path: string
  query?: QueryBuilderParams
}[] = [
  {
    label: "Getting Started",
    path: "/docs/",
    query: {where: [{group: "Getting Started"}]},
  },
  {
    label: "Components",
    path: "/docs/components",
  }
]
</script>
<template>
  <DefaultLayout>
    <div
      class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <aside
        class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block py-8"
      >
        <div class="w-full space-y-4">
          <div v-for="content in contentNavigation">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {{ content.label }}
          </h4>
          <ContentList :path="content.path" :query="content?.query" v-slot="{ list }">
            <div
              v-for="item in list"
              :key="item._path"
              class="grid grid-flow-row auto-rows-max text-sm"
            >
              <NuxtLink
                :to="item._path"
                :class="{
                  'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline': true,
                  'font-medium text-foreground': $route.path === item.href,
                  'text-muted-foreground': $route.path !== item.href,
                }"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </ContentList>
          </div>
        </div>
      </aside>
      <slot />
    </div>
  </DefaultLayout>
</template>
