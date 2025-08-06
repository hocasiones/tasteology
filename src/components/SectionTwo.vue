<script setup lang="ts">
import { GET_SECTION_2 } from '@/graphql/queries'
import { useQuery } from '@vue/apollo-composable'
import { computed, watch } from 'vue'

const { result: section2Result } = useQuery(GET_SECTION_2)

watch(section2Result, () => {
  console.log(section2Result.value)
})

const result = computed(() => section2Result.value?.posts ?? null)
</script>

<template>
  <div class="py-[60px] lg:py-[120px]">
    <div class="flex justify-center mb-[30px]">
      <div class="title">Taste the Colours</div>
    </div>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
      <div v-for="value in result" :key="value.id">
        <img :src="value.featuredImage.url" alt="" />
        <article>
          <h3>{{ value.title }}</h3>
          <div v-html="value.content"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1.5px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-bottom: 30px;
  border-bottom: 1px solid #fff;
}
img {
  margin-bottom: 30px;
}
article {
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
