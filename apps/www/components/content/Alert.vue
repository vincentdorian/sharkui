<script setup lang="ts">
import { AlertCircle } from "lucide-vue-next";
import {
  SharkAlert,
  SharkAlertDescription,
  SharkAlertTitle,
} from "~/components/ui/alert";
</script>
<template>
  <SharkAlert>
    <AlertCircle class="h-4 w-4" />
    <SharkAlertTitle> <slot name="title"></slot></SharkAlertTitle>
    <SharkAlertDescription>
      <slot name="description"></slot>
    </SharkAlertDescription>
  </SharkAlert>
</template>
