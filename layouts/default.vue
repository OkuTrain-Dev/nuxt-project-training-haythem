<script setup lang="ts">

import {useNowRouteIcon, useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

const routePathList = useRouteDefine()
const routeName = useNowRouteTitle()
const routeIcon = useNowRouteIcon()
const route = useRoute()

const menuTitle = ref("Nuxt练习项目")

</script>

<template>
  <div>
    <el-container class="h-screen">
      <el-aside width="300px">
        <div class="bg-white border-r border-gray-2 h-full">
          <div class="flex flex-col p-4">
            <div class="text-center py-4 font-bold text-xl">{{ menuTitle }}</div>
            <el-menu class="border-none" :router="true" :default-active="route.path">
              <el-menu-item class="rounded-md" v-for="item in routePathList" :key="item.path" :index="item.path">
                <span v-if="item.icon !== undefined && item.icon !== ''">
                  <el-icon>
                    <Component :is="item.icon"/>
                  </el-icon>
                </span>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="p-0 border-b border-gray-2 w-full bg-white">
          <div class="h-full flex items-center p-4 font-bold text-lg">
            <div class="flex items-center">
              <div class="mr-2" v-if="routeIcon !== undefined && routeIcon !== ''">
                <el-icon class="text-xl flex items-center">
                  <Component :is="routeIcon"/>
                </el-icon>
              </div>
              <div>{{ routeName }}</div>
            </div>
          </div>
        </el-header>
        <el-main class="p-0">
          <NuxtPage/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
