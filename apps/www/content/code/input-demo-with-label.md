```vue
<script setup lang="ts">
import { SharkInput } from "@/components/ui/input";
import { SharkLabel } from "~/components/ui/label";

const company = ref("");
</script>
<template>
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <SharkLabel for="company">Company name</SharkLabel>
    <SharkInput id="company" v-model="company" placeholder="Type here" />
  </div>
</template>
```