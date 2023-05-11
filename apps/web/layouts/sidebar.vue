<script setup lang="ts">
import DefaultLayout from './default.vue'
</script>
<template>
    <DefaultLayout>
        <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">

            </aside>
            <slot />

        </div>
    </DefaultLayout>
</template>