<script setup>
import HelloWorld from "../components/HelloWorld.vue";
import {useRouter} from 'vue-router'

const router = useRouter();
</script>

<template>
  <!-- 父容器：加个 div，让它变成 flex 布局 -->
  <div class="container">
    <aside class="aside">
      <ul>
        <li><a @click="router.push('/babylonJS')">BabylonJS</a></li>
        <li><a @click="router.push('/techStack')">SpringBoot</a></li>
      </ul>
    </aside>
    <main class="main">
      <HelloWorld/>
    </main>
  </div>
</template>

<style scoped>
/* 核心：让两个盒子左右并排 */
.container {
  display: flex;
  gap: 20px; /* 中间留空隙 */
  /* 让 Home 页面的容器占满路由视图的高度 */
  height: 100%;
  /* 消除 padding/margin 导致的高度溢出 */
  box-sizing: border-box;
}

/* 侧边栏宽度 */
.aside {
  width: 250px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #00000008;
}

/* 主内容占剩下所有空间 */
.main {
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #00000008;
}


/* 导航菜单 */
aside ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding-inline-start: 0;
  text-align: left;
}

aside a {
  display: block;
}

aside li {
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;
}

aside li:hover {
  background-color: #3498db;
}
</style>
