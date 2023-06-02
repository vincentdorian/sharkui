<script setup lang="ts">
import { SharkInput } from "@/components/ui/input";

const count = ref("");

</script>
<template>
  <SharkInput type="number" v-model="count" placeholder="Count" />
</template>
