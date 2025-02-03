<script setup lang="ts">
import {useCoffeeData, useCoffeeDataTableLabel} from "~/composables/useCoffeeData";
import {includes} from "lodash-es";

const coffeeData = useCoffeeData()
const coffeeDataTableLabel = useCoffeeDataTableLabel()

// 创建个事件监听表格选中事件，并将被选中的数据存储到该变量中
const selectionData = ref<coffeeItem[]>([])
const handleSelectionChange = (data: coffeeItem[]) => {
  selectionData.value = data
}

// 删除数据事件
const handleDeleteData = () => {
  ElMessageBox.confirm("你确定要删除这些数据吗?", "删除确认", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    if (selectionData.value.length === 0) {
      ElMessage.error("未选择任何数据！")
      return
    }

    const ids = selectionData.value.map(item => item.id)
    coffeeData.value = coffeeData.value.filter(item => !includes(ids, item.id))
    ElNotification.success(`删除成功~ 已成功删除${ids.length}条数据`)
  }).catch(() => {
    ElMessage.info("操作已取消")
  })
}

const addDataDialogVisible = ref(false)

// 表单数据存储
const addFormData = reactive<coffeeItem>({
  brand: "",
  name: "",
  minCaffeine: 0,
  maxCaffeine: 0
})

// 每次dialog关闭都应该运行这个函数用于重置表单数据
const resetAddFromData = () => {
  addFormData.brand = ""
  addFormData.name = ""
  addFormData.minCaffeine = 0
  addFormData.maxCaffeine = 0
}

// 添加数据事件
const handleAddData = () => {
  const endId = coffeeData.value[coffeeData.value.length - 1].id
  // 断言id一定不可能为空
  const newItem = {...addFormData, id: endId! + 1}
  coffeeData.value.push(newItem)
  resetAddFromData()
  addDataDialogVisible.value = false
  ElNotification.success(`数据添加成功~`)
}

</script>

<template>
  <div class="h-full">
    <el-image class="w-full h-full fixed -z-9999" fit="cover" src="/images/88011960_p0.jpg"></el-image>

    <el-dialog title="添加数据" v-model="addDataDialogVisible">
      <el-form :model="addFormData" label-width="auto" class="px-4">
        <el-form-item label="品牌" prop="brand"
                      :rules="[{ required: true, message: '请输入品牌', trigger: 'blur' },]">
          <el-input v-model="addFormData.brand"/>
        </el-form-item>
        <el-form-item label="名称" prop="name"
                      :rules="[{ required: true, message: '请输入名称', trigger: 'blur' },]">
          <el-input v-model="addFormData.name"/>
        </el-form-item>
        <el-form-item label="最小咖啡因" prop="minCaffeine"
                      :rules="[{ required: true, message: '请输入最小咖啡因', trigger: 'blur' }]">
          <el-input v-model="addFormData.minCaffeine"/>
        </el-form-item>
        <el-form-item label="最大咖啡因" prop="maxCaffeine"
                      :rules="[{ required: true, message: '请输入最大咖啡因', trigger: 'blur' }]">
          <el-input v-model="addFormData.maxCaffeine"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAddData">确认添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <div class="p-4 flex w-full h-full justify-center items-center">
      <el-card class="border-none rounded-md">
        <div class="mb-4">
          <el-button @click="addDataDialogVisible = true">添加数据</el-button>
          <el-button @click="handleDeleteData">删除数据</el-button>
        </div>
        <el-table :data="coffeeData" stripe border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"/>
          <el-table-column type="index" width="50"/>
          <el-table-column v-for="item in coffeeDataTableLabel" :key="item.key" :prop="item.key" :label="item.name"
                           :width="item.width || ''"/>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<style scoped>

</style>
