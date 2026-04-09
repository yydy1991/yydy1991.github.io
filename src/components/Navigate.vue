<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="nav-header">
    <div class="logo"><a @click="router.push('/')">Berry 博瑞</a></div>
    <nav>
      <ul>
        <li><a @click="router.push('/')">首页</a></li>
        <li><a @click="router.push('/product')">产品</a></li>
        <li><a @click="router.push('/news')">新闻</a></li>
        <li><a @click="router.push('/about')">关于我们</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* 顶部头部 */
header {
  height: 4vh;
  background-color: #2c3e50;
  color: white;
  padding: 0.6rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
}

/* 导航菜单 */
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498db;
}
</style>
