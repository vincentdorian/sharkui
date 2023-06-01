<script setup lang="ts">
import {
  SharkAccordion,
  SharkAccordionContent,
  SharkAccordionItem,
  SharkAccordionTrigger,
} from "@/components/ui/accordion";
</script>
<template>
  <SharkAccordion class="w-full">
    <SharkAccordionItem value="what-is-vue">
      <SharkAccordionTrigger>
        <span> What is Vue? </span>
      </SharkAccordionTrigger>
      <SharkAccordionContent>
        Vue (pronounced /vjuː/, like view) is a progressive framework for
        building user interfaces.
      </SharkAccordionContent>
    </SharkAccordionItem>
    <SharkAccordionItem value="what-is-ark">
      <SharkAccordionTrigger> What is Ark UI? </SharkAccordionTrigger>
      <SharkAccordionContent>
        Ark UI is the backbone of Chakra UI that is built with Zag.js.
      </SharkAccordionContent>
    </SharkAccordionItem>
    <SharkAccordionItem value="which-frameworks">
      <SharkAccordionTrigger>
        Which frameworks are supported?
      </SharkAccordionTrigger>
      <SharkAccordionContent>
        Currently the setup is only available for Nuxt 3, but all major
        frameworks using Vue 3 can use sharkui.
      </SharkAccordionContent>
    </SharkAccordionItem>
  </SharkAccordion>
</template>
