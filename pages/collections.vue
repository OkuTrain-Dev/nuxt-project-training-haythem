<script setup lang="ts">
export interface CollectionsItems {
  id: number,
  title: string,
  likes: number,
  imgSrc?: string,
}

const tags = reactive<string[]>([
  "Profile", "New York", "Relaxing", "Person", "Fashion"
])

const itemImgPathPrefix = "/images/"

const collections = reactive<CollectionsItems[]>([
  {id: 0, title: "Hotaru", likes: 161701, imgSrc: "64495434_p0.jpg"},
  {id: 1, title: "夕陽を背に", likes: 11675, imgSrc: "70336750_p0.png"},
  {id: 2, title: "雪月花", likes: 6176, imgSrc: "73280293_p0.jpg"},
  {id: 3, title: "幕開け", likes: 5182, imgSrc: "74621191_p0.jpg"},
  {id: 4, title: "Novelism", likes: 30744, imgSrc: "84179374_p0.png"},
  {id: 5, title: "夕刻の街", likes: 29547, imgSrc: "84269486_p0.png"},
  {id: 6, title: "帰り道、夕焼け", likes: 3293, imgSrc: "88011960_p0.jpg"},
])

const handleTagsClick = (text: string) => {
  console.log(`你点击了标签~ 标签名为：${text}`)
}
</script>

<template>
  <div class="h-full flex justify-center items-center w-full">
    <NuxtImg class="w-full h-full object-cover" src="/images/84179374_p0.png" alt="bg"></NuxtImg>
    <div
        class="bg-white bg-op-70 backdrop-blur-md rounded-xl min-h-700px w-70% h-70% p-10 shadow-xl shadow-gray-6 shadow-op-20 fixed">
      <div class="font-bold text-2xl mb-4">Popular collections</div>
      <div class="flex mb-6">
        <div class="bg-white bg-op-50 rounded-xl p-2 mr-2 transition-colors hover:bg-op-100" v-for="item in tags"
             :key="item" @click="handleTagsClick(item)">{{ item }}
        </div>
      </div>
      <div class="flex flex-wrap overflow-y-auto max-h-82% justify-center">
        <CollectionsCard v-for="item in collections" :key="item.id" :id="item.id" :title="item.title"
                         :likes="item.likes"
                         :img-src="itemImgPathPrefix+item.imgSrc || ''"></CollectionsCard>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
