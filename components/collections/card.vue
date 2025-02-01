<script setup lang="ts">
import type {CollectionsItems} from "~/pages/collections.vue";

defineProps<CollectionsItems>()

const handleCardClick = (title: string, likes: number, imgSrc?: string) => {
  console.log(`
  你点击了卡片~
  卡片标题为: ${title}
  卡片点赞数为: ${likes}
  卡片图片Pixiv地址为: ${convertLocalImgSrcToPixivSrc(imgSrc) || '无图片'} `)
}

const convertLocalImgSrcToPixivSrc = (imgSrc?: string) => {
  if (imgSrc === undefined) return
  const pixivUrlPrefix = "https://pixiv.net/artworks/"
  const searchImgIdRegex = new RegExp("/images/([0-9]*?)_.*")
  const imgId = imgSrc.match(searchImgIdRegex)![1]
  return pixivUrlPrefix + imgId
}

</script>

<template>
  <div class="rounded-xl mr-8 mb-8 bg-white bg-op-90 p-5 w-380px h-380px hover:shadow-xl transition-all"
       @click="handleCardClick(title, likes, imgSrc)">
    <div class="grid gap-3">
      <div class="overflow-hidden rounded-xl">
        <NuxtImg class="w-full h-200px object-cover" :src="imgSrc"></NuxtImg>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-gray-3 rounded-xl h-80px"></div>
        <div class="bg-gray-2 rounded-xl h-80px"></div>
        <div class="bg-gray-1 rounded-xl h-80px"></div>
      </div>
      <div class="flex justify-between">
        <div>{{ title }}</div>
        <div>
          <span class="mr-1">{{ likes }}</span>
          <span>❤️</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
