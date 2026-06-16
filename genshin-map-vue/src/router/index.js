import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/earth'
        },
        {
            path: '/earth',
            component: () => import('../views/earth.vue')
        },
        {
            path: '/genshin',
            component: () => import('../views/genshin.vue')
        },
    ]
})

export default router
