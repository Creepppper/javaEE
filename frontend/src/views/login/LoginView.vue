<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  if (!loginForm.username || !loginForm.password) {
    ElMessage.warning('请输入用户名和密码')
    return
  }

  // 临时测试代码，后续替换成真实登录接口
  localStorage.setItem('token', 'temporary-token')
  ElMessage.success('登录成功')
  router.push('/home')
}
</script>

<template>
  <div class="login-page">
    <el-card class="login-card">
      <template #header>
        <h2>终身学习学分银行信息平台</h2>
      </template>

      <el-form :model="loginForm" label-width="70px">
        <el-form-item label="用户名">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            clearable
          />
        </el-form-item>

        <el-form-item label="密码">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>

        <el-button
          type="primary"
          style="width: 100%"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.login-card {
  width: 420px;
}

.login-card h2 {
  margin: 0;
  text-align: center;
}
</style>