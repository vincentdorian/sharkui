<script setup lang="ts">
import {
  SharkTabs,
  SharkTabTrigger,
  SharkTabContent,
  SharkTabList,
} from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

const props = defineProps<{
  align?: "center" | "start" | "end";
  name?: string;
}>();

const code = ref();

const { data } = await useAsyncData("code", () =>
  queryContent("/code/" + props.name).findOne()
);

const hasMounted = ref(false);

onMounted(() => {
  hasMounted.value = true;
});
</script>
<template>
  <div :class="cn('group relative my-4 flex flex-col space-y-2')">
    <SharkTabs default-value="preview" class="relative mr-auto w-full">
      <div class="flex items-center justify-between pb-3">
        <SharkTabList
          class="w-full justify-start rounded-none border-b bg-transparent p-0"
        >
          <SharkTabTrigger
            value="preview"
            class="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            as-child
          >
            <button>Preview</button>
          </SharkTabTrigger>
          <SharkTabTrigger
            value="code"
            class="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
          >
            <button>Code</button>
          </SharkTabTrigger>
        </SharkTabList>
      </div>
      <div>
        <SharkTabContent value="preview" class="rounded-md border">
          <div
            :class="
              cn('flex min-h-[350px] justify-center p-10 [&_input]:max-w-sm', {
                'items-center': align === 'center',
                'items-start': align === 'start',
                'items-end': align === 'end',
              })
            "
          >
            <slot v-if="hasMounted" />
            <p v-else>Loading...</p>
          </div>
        </SharkTabContent>
        <SharkTabContent value="code">
          <ContentRenderer :value="data" />
        </SharkTabContent>
      </div>
    </SharkTabs>
  </div>
</template>
<style scoped>
pre code .line {
  @apply text-gray-400;
  padding: 0 0.5rem 0.5rem 0;
}
</style>
