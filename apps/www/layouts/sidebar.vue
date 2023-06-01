<script setup lang="ts">
import DefaultLayout from "@/layouts/default.vue";
import { cn } from "@/lib/utils";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const contentNavigation: {
  label: string;
  path: string;
  query?: QueryBuilderParams;
}[] = [
  {
    label: "Getting Started",
    path: "/docs",
    query: { where: [{ group: "Getting Started" }], sort: [{ position: 1 }] },
  },
  {
    label: "Components",
    path: "/components",
  },
];
</script>
<template>
  <DefaultLayout>
    <div
      class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <aside
        class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-8 md:sticky md:block"
      >
        <div class="w-full space-y-4">
          <div
            v-for="content in contentNavigation"
            :key="content.path"
            class="pb-4"
          >
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {{ content.label }}
            </h4>
            <ContentList
              v-slot="{ list }"
              :path="content.path"
              :query="content?.query"
            >
              <div
                v-for="item in list"
                :key="item._path"
                class="grid grid-flow-row auto-rows-max text-sm"
              >
                <NuxtLink
                  :href="item._path"
                  :class="
                    cn(
                      'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
                      {
                        'text-muted-foreground': $route.path !== item._path,
                        'text-foreground font-medium':
                          $route.path === item._path,
                      },
                    )
                  "
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
