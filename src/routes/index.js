/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import HomeRoutes from './includes/home'

const routes = [
    ...HomeRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

router.beforeEach(() => {})

export default router
