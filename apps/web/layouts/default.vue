<script setup lang="ts">
import {Menu, MenuTrigger} from "ui/components/menu"
</script>
<template>
    <header class="h-16 border-b flex flex-row items-center">
        <nav class="mx-auto w-full max-w-5xl">
           <Menu>
                <MenuTrigger>
                    Trigger
                </MenuTrigger>
           </Menu>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        
    </footer>
</template>