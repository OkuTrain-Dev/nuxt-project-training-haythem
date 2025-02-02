<script setup lang="ts">
const num = ref(0)
const increment = () => {
  num.value++
}
</script>

<template>
  <div class="h-full flex justify-center items-center w-full">
    <el-image class="w-full h-full fixed -z-9999" src="/images/64495434_p0.jpg" fit="cover"></el-image>
    <div class="bg-white bg-op-30 backdrop-blur-md rounded-md w-400px h-300px p-10 shadow-xl shadow-gray-5 shadow-op-50">
      <div class="px-10 text-2xl font-bold mb-2 text-center text-white">Counter</div>
      <div class="mb-10 text-white">
        Count: {{num}}
      </div>
      <button class="rounded-md bg-white text-white bg-op-30 p-2 w-full hover:bg-op-60 hover:text-black transition-colors" @click="increment">+1</button>
    </div>
  </div>
</template>

<style scoped>

</style>
