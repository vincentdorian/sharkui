<script setup lang="ts">
import {
  SharkAccordion,
  SharkAccordionContent,
  SharkAccordionItem,
  SharkAccordionTrigger,
} from "@/components/ui/accordion";

const props = defineProps<{
  items: {
    id: string;
    title: string;
    content: string;
  }[];
}>();
</script>
<template>
  <SharkAccordion>
    <SharkAccordionItem
      v-for="item in items"
      :key="item.id"
      :value="item.id"
    >
      <SharkAccordionTrigger>
        {{ item.title }}
      </SharkAccordionTrigger>
      <SharkAccordionContent> {{ item.content }} </SharkAccordionContent>
    </SharkAccordionItem>
  </SharkAccordion>
</template>
