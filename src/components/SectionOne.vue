<script setup lang="ts">
import { GET_SECTION_1, GET_MEDIA } from '@/graphql/queries'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref, computed } from 'vue'
import ImageOverlay from '@/components/ImageOverlay.vue'

const mediaIDs = ref<number[]>([])

const { result: section1Result } = useQuery(GET_SECTION_1)
const { result: mediaResult } = useQuery(GET_MEDIA, {
  ids: mediaIDs,
})

watch(section1Result, () => {
  mediaIDs.value = [
    section1Result.value.page.section_1_image_1,
    section1Result.value.page.section_1_image_2,
    section1Result.value.page.section_1_image_3,
  ]
  // console.log(section1Result.value)
})

// watch(mediaResult, () => {
//   console.log(mediaResult.value)
// })

const page = computed(() => section1Result.value?.page ?? null)
const media = computed(() => mediaResult?.value?.mediaItems ?? null)
</script>

<template>
  <div class="section-1 py-[60px] lg:py-[120px] columns-1 sm:columns-2 lg:columns-3 gap-[15px]">
    <ImageOverlay v-for="value in media" :key="value.id" :src="value.url"
      ><img :src="value.url" alt="" class="mb-[15px]"
    /></ImageOverlay>
    <div class="pl-[15px] overflow-hidden">
      <a
        href="/"
        @click.stop.prevent="
          (e) => {
            console.log(e.target)
          }
        "
        ><h2
          class="text-[30px] font-light leading-[1.1] tracking-[1.5px] text-white pb-[30px] mb-[30px] border-b border-[#ccc] text-left"
        >
          {{ page?.section_1_title }}
        </h2></a
      >
      <div v-html="page?.section_1_description"></div>
    </div>
  </div>
</template>

<style>
.section-1 {
  h4 {
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #cf1430;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
}
</style>
