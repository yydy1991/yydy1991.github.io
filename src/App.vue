<script setup>
import Navigate from './components/Navigate.vue'
</script>

<template>
  <div class="app-container">
    <Navigate/>
    <router-view class="router-view-content"/>
  </div>
</template>

<style>

/* 根容器：占满视口高度，flex 垂直布局 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* 消除默认边距，避免滚动条 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 路由视图：自动填充剩余高度（关键） */
.router-view-content {
  flex: 1;
  /* 可选：消除内部元素溢出 */
  overflow: auto;
  box-sizing: border-box;
}
</style>
