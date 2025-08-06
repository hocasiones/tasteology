<script setup lang="ts">
import ImageOverlay from '@/components//ImageOverlay.vue'
import { Skeleton } from '@/components/ui/skeleton'
import { GET_SECTION_2 } from '@/graphql/queries'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

const { result: section2Result, loading } = useQuery(GET_SECTION_2)

// watch(loading, () => {
//   console.log(loading.value)
// })

const result = computed(() => section2Result.value?.posts ?? null)
const resultLoading = computed(() => loading.value || null)
</script>

<template>
  <div v-if="!resultLoading" class="section-2 py-[60px] lg:py-[120px]">
    <div class="flex justify-center mb-[30px]">
      <div
        class="text-[30px] font-light leading-[1.1] tracking-[1.5px] text-white pb-[30px] border-b border-[#fff] uppercase"
      >
        Taste the Colours
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div v-for="value in result" :key="value.id">
        <ImageOverlay :src="value.featuredImage.url"
          ><img :src="value.featuredImage.url" alt="" class="mb-[30px]"
        /></ImageOverlay>
        <article>
          <a
            href="/"
            @click.stop.prevent="
              (e) => {
                console.log(e.target)
              }
            "
            ><h3>{{ value.title }}</h3></a
          >
          <div v-html="value.content"></div>
        </article>
      </div>
    </div>
  </div>

  <div v-if="resultLoading" class="section-2 py-[60px] lg:py-[120px]">
    <div class="flex justify-center mb-[30px]">
      <div
        class="text-[30px] font-light leading-[1.1] tracking-[1.5px] text-white pb-[30px] border-b border-[#fff] uppercase"
      >
        <Skeleton class="w-[100%] h-10 rounded-full bg-gray-400 mb-4" />
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div v-for="value in result" :key="value.id">
        <Skeleton class="w-[408px] h-[325px] bg-gray-400 overflow-hidden mb-8" />
        <article>
          <Skeleton class="w-[100%] h-5 rounded-full bg-gray-400 mb-5" />
          <Skeleton class="w-[100%] h-5 rounded-full bg-gray-400 mb-2" />
          <Skeleton class="w-[100%] h-5 rounded-full bg-gray-400 mb-2" />
          <Skeleton class="w-[100%] h-5 rounded-full bg-gray-400 mb-2" />
          <Skeleton class="w-[100%] h-5 rounded-full bg-gray-400 mb-2" />
        </article>
      </div>
    </div>
  </div>
</template>

<style>
.section-2 article {
  text-align: center;
  padding: 0 30px;
  h3 {
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    font-size: 21px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
}
</style>
