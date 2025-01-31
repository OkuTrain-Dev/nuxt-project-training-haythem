<script setup lang="ts">
interface RouterItem {
  path: string,
  name: string
}

const route = reactive<RouterItem[]>(
    [
      {name: '首页', path: '/'},
      {name: '计数器', path: '/counter'},
      {name: '信息', path: '/info'}
    ]
)

const menuTitle = ref("Nuxt练习项目")

</script>

<template>
  <div class="flex h-screen w-full">
    <div class="bg-white border-r border-gray-2 w-300px">
      <div class="flex flex-col p-4">
        <div class="text-center py-2 font-bold text-xl">{{ menuTitle }}</div>


        <!--suppress HtmlUnknownTarget -->
        <NuxtLink v-for="item in route" :key="item.path" :to="item.path">
          <button class="hover:bg-blue-2 rounded-md transition-colors border shadow-md shadow-gray-1 p-1 mb-2 w-full">
            {{ item.name }}
          </button>
        </NuxtLink>
      </div>
    </div>

    <div class="h-full w-full bg-white">
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>

</style>
