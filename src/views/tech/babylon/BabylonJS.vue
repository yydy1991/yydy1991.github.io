<script setup>
import {onMounted, onUnmounted} from 'vue'
import GUI from 'lil-gui';
import {BabylonApp} from "./Babylon.js";

let gui = new GUI();
let guiObject = {};
guiObject.add = true;
gui.add(guiObject, "add")

onUnmounted(() => {
  gui.destroy();
})

onMounted(() => {
  new BabylonApp("renderCanvas")
})
</script>

<template>
  <div class="babylon-container">
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<style scoped>
.babylon-container {
  /* 占满路由视图的高度 */
  max-height: 96vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  /* 可选：消除内边距 */
  padding: 0;
  margin: 0;
}

#renderCanvas {
  display: block; /* 消除 inline 间隙 */
  object-fit: cover; /* 避免变形 */
  width: 100%;
  height: 93.5vh;
}
</style>
