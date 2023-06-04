<script setup lang="ts">
import { SharkInput } from "@/components/ui/input";

const email = ref("");
</script>
<template>
  <SharkInput v-model="email" placeholder="Email" />
</template>
