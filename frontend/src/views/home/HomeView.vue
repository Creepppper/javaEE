<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <div class="home-page">
    <el-card>
      <h1>终身学习学分银行信息平台</h1>
      <p>前端基础工程运行正常。</p>

      <el-button type="danger" @click="handleLogout">
        退出登录
      </el-button>
    </el-card>
  </div>
</template>

<style scoped>
.home-page {
  padding: 24px;
}
</style>