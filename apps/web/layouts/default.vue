<script setup lang="ts">
import {Button} from '@/components/button'
</script>
<template>
  <header
    class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur"
  >
    <div class="container flex h-14 items-center">
      <div class="mr-4 hidden md:flex">
        <NuxtLink class="mr-6 flex items-center space-x-2" href="/"
          ><svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle></svg
          ><span class="hidden font-bold sm:inline-block">sharkui</span></NuxtLink
        >
        <nav class="flex items-center space-x-6 text-sm font-medium">
          
        </nav>
        <div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav class="flex items-center space-x-1">
            <Button variant="ghost">
              Hi
            </Button>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <footer></footer>
</template>
