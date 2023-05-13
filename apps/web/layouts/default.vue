<script setup lang="ts">
import { buttonVariants, Button } from '~/components/button';
import { SunMedium, Moon } from 'lucide-vue-next'

const links: { name: string; href: string }[] = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Components', href: '/components' },
  { name: 'Examples', href: '/examples' },
  { name: 'Github', href: '#' },
]

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>
<template>
  <header
    class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur"
  >
    <div class="container flex h-14 items-center">
      <div class="mr-4 hidden md:flex w-full">
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
          ><span class="hidden font-bold sm:inline-block">shark</span></NuxtLink
        >
        <nav class="flex items-center space-x-2 text-sm font-medium">
          <NuxtLink
              v-for="link in links"
              :key="link.name"
              :href="link.href"
              :class="buttonVariants({ size: 'sm', variant: 'link' })"
              >
              {{ link.name }}
            </NuxtLink>
        </nav>
        <div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <nav class="flex items-center space-x-1">
            <Button @click="toggleColorMode()" variant="ghost" size="sm">
              <SunMedium v-if="$colorMode.value == 'light'" class="h-5 w-5"/>
              <Moon v-else class="h-5 w-5"/>
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
