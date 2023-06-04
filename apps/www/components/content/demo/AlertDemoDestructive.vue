<script setup lang="ts">
import { AlertCircle, Terminal } from "lucide-vue-next";
import {
  SharkAlert,
  SharkAlertDescription,
  SharkAlertTitle,
} from "~/components/ui/alert";
</script>
<template>
  <SharkAlert variant="destructive">
    <AlertCircle class="h-4 w-4" />
    <SharkAlertTitle> Error! </SharkAlertTitle>
    <SharkAlertDescription>
      Your session has expired. Please log in again.
    </SharkAlertDescription>
  </SharkAlert>
</template>
