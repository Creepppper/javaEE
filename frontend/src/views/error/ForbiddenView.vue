<template>
  <el-result
    icon="warning"
    title="403"
    sub-title="你没有权限访问该页面"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/home')">
        返回首页
      </el-button>
    </template>
  </el-result>
</template>