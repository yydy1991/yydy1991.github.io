import {createRouter, createWebHistory} from 'vue-router'
// 导入各页面组件（需先创建对应组件文件）
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import News from '../views/News.vue'
import About from '../views/About.vue'
import TechStack from "../views/TechStack.vue";
import BabylonJS from "../views/tech/babylon/BabylonJS.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/product', component: Product},
    {path: '/news', component: News},
    {path: '/techStack', component: TechStack},
    {path: '/babylonJS', component: BabylonJS},
    {path: '/about', component: About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
