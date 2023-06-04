<script setup lang="ts">
import {
  SharkCheckbox,
  SharkCheckboxControl,
  SharkCheckboxInput,
  SharkCheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "lucide-vue-next";

const checked = ref(false);
</script>
<template>
  <SharkCheckbox v-model="checked">
    <SharkCheckboxLabel>SharkCheckbox</SharkCheckboxLabel>
  </SharkCheckbox>
</template>
