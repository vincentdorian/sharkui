<script setup lang="ts">
import { CheckIcon, CopyIcon } from "lucide-vue-next";
import { cn, copyToClipboard } from "~/lib/utils";

const props = defineProps<{
  value: string;
}>();

const hasCopied = ref(false);

const copyCode = () => {
  copyToClipboard(props.value);
  hasCopied.value = true;
};
watchEffect(() => {
  if (hasCopied.value) {
    setTimeout(() => {
      hasCopied.value = false;
    }, 2000);
  }
});
</script>
<template>
  <button
    :class="
      cn(
        'relative z-20 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-background text-sm font-medium transition-all hover:bg-muted focus:outline-none',
      )
    "
    @click="copyCode()"
  >
    <span class="sr-only">Copy</span>
    <CheckIcon
      v-if="hasCopied"
      class="h-3 w-3"
    />
    <CopyIcon
      v-else
      class="h-3 w-3"
    />
  </button>
</template>
