<script setup lang="ts">

import {useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

const route = useRouteDefine()
const routeName = useNowRouteTitle()

const menuTitle = ref("Nuxt练习项目")

</script>

<template>
  <div class="w-full h-screen">
    <section class="flex flex-row h-full">
      <aside class="h-full min-w-300px">
        <div class="bg-white border-r border-gray-2 h-full">
          <div class="flex flex-col p-4">
            <div class="text-center py-2 font-bold text-xl">{{ menuTitle }}</div>
            <!--suppress HtmlUnknownTarget -->
            <NuxtLink v-for="item in route" :key="item.path" :to="item.path">
              <button
                  class="hover:bg-blue-2 rounded-md transition-colors border shadow-md shadow-gray-1 p-1 mb-2 w-full">
                {{ item.name }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </aside>

      <section class="flex flex-col w-full h-full">
        <header class="min-h-60px">
          <div class="h-full flex items-center border-b border-gray-2 p-4 font-bold text-lg">
            {{ routeName }}
          </div>
        </header>

        <main class="h-full overflow-auto">
          <NuxtPage/>
        </main>
      </section>
    </section>
  </div>
</template>

<style scoped>

</style>
