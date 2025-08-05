<script lang="ts">
import { GET_SECTION_1, GET_MEDIA } from '@/graphql/queries'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref, computed } from 'vue'

export default {
  setup() {
    const mediaIDs = ref<number[]>([])

    const { result: section1Result } = useQuery(GET_SECTION_1)
    const { result: mediaResult, loading: mediaLoading } = useQuery(GET_MEDIA, {
      ids: mediaIDs,
    })

    watch(section1Result, () => {
      mediaIDs.value = [
        section1Result.value.page.section_1_image_1,
        section1Result.value.page.section_1_image_2,
        section1Result.value.page.section_1_image_3,
      ]
      console.log(section1Result.value)
    })

    watch(mediaResult, () => {
      console.log(mediaResult.value)
    })

    const page = computed(() => section1Result.value?.page ?? null)
    const media = computed(() => mediaResult?.value?.mediaItems ?? null)

    return {
      page,
      media,
    }
  },
}
</script>

<template>
  <div class="py-[60px] lg:py-[120px] columns-1 sm:columns-2 lg:columns-3 gap-[15px]">
    <img v-for="value in media" :key="value.id" :src="value.url" alt="" />
    <div class="pl-[15px] overflow-hidden">
      <a href="/"
        ><h2>{{ page?.section_1_title }}</h2></a
      >
      <div v-html="page?.section_1_description"></div>
    </div>
  </div>
</template>

<style>
img {
  margin-bottom: 15px;
}
h2 {
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1.5px;
  text-align: left;
  color: #fff;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
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
</style>
