<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";
import {
  SharkSheetClose,
  SharkSheetContent,
  SharkSheetDescription,
  SharkSheetFooter,
  SharkSheetHeader,
  SharkSheetTitle,
  SharkSheetOverlay,
  SharkSheet,
  SharkSheetTrigger,
} from "~/components/ui/sheet";
</script>
<template>
  <div>
    <SharkSheet>
      <SharkSheetTrigger :class="buttonVariants({ variant: 'outline' })">
        Open Sheet
      </SharkSheetTrigger>

      <Teleport to="body">
        <SharkSheetOverlay />
        <SharkSheetContent position="bottom" size="sm">
          <SharkSheetHeader>
            <SharkSheetTitle> Sheet Title </SharkSheetTitle>
            <SharkSheetDescription>
              A sheet that can be positioned at the top, bottom, left, or right.
            </SharkSheetDescription>
          </SharkSheetHeader>
          <div class="grid">
            Here is some content
          </div>
          <SharkSheetFooter>
            <SharkSheetClose :class="buttonVariants()">
              Close Sheet
            </SharkSheetClose>
          </SharkSheetFooter>
        </SharkSheetContent>
      </Teleport>
    </SharkSheet>
  </div>
</template>
