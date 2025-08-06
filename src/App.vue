<script setup lang="ts">
import '@fontsource/open-sans'
import SectionOne from '@/components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
</script>

<template>
  <div class="container mx-auto px-[15px]">
    <SectionOne />
    <SectionTwo />
  </div>
</template>

<style>
@import 'tailwindcss';

body {
  background-color: #000;
  color: #fff;
  font-family: 'Open Sans Variable', sans-serif;
}
p {
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-bottom: 30px;
}
</style>
