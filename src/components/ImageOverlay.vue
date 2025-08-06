<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

const props = defineProps(['src'])
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader class="hidden">
        <DialogTitle>Image Overlay</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <img :src="props.src" alt="" />
    </DialogContent>
  </Dialog>
</template>

<style>
button.ring-offset-background {
  display: none !important;
}
</style>
