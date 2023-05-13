<script setup lang="ts">
import {
  Accordion as SharkAccordion,
  AccordionTrigger as SharkAccordionTrigger,
  AccordionItem as SharkAccordionItem,
  AccordionContent as SharkAccordionContent,
} from "~/components/accordion";

import {
  Accordion as ArkAccordion,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionItem as ArkAccordionItem,
  AccordionContent as ArkAccordionContent,
} from "@ark-ui/vue";

const accordionContent = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Accordion 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Accordion 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
</script>
<template>
  <NuxtLayout>
    <SharkAccordion>
      <SharkAccordionItem
        v-for="item in accordionContent"
        :value="item.title"
        :key="item.title"
      >
        <SharkAccordionTrigger>
          <button>{{ item.title }}</button>
        </SharkAccordionTrigger>
        <SharkAccordionContent>
          {{ item.content }}
        </SharkAccordionContent>
      </SharkAccordionItem>
    </SharkAccordion>
  </NuxtLayout>
</template>
