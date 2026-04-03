import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    base: '/docs/',
    // 打包输出目录（默认 dist，不用改）
    build: {
        outDir: 'dist'
    },
    plugins: [vue()],
})
