<script setup lang="ts">
import { Terminal } from "lucide-vue-next";
import {
  SharkAlert,
  SharkAlertDescription,
  SharkAlertTitle,
} from "~/components/ui/alert";
</script>
<template>
  <SharkAlert>
    <Terminal class="h-4 w-4" />
    <SharkAlertTitle> Heads up! </SharkAlertTitle>
    <SharkAlertDescription>
      You can add components to your app using the cli.
    </SharkAlertDescription>
  </SharkAlert>
</template>
