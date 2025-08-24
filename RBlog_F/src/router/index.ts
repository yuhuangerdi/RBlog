import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage.vue'
import ArticlePage from '@/pages/ArticlePage/ArticlePage.vue'
import CategoryAll from '@/pages/ArticlePage/CategoryAll/CategoryAll.vue'
import CategorySignal from '@/pages/ArticlePage/CategorySignal/CategorySignal.vue'
import ReadPage from '@/pages/ReadPage/ReadPage.vue'
import FeelingPage from '@/pages/FeelingPage/FeelingPage.vue'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } 
        else {
            return { top: 0 };
        }
    },
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        {
            path: '/article',
            component: ArticlePage,
            redirect: '/article/category/all',
            children: [
                { path: 'category/all', component: CategoryAll },
                { path: 'category/signal', component: CategorySignal },
            ],
        },
        { path: '/feeling', component: FeelingPage },
        { path: '/archiving', component: HomePage },
        { path: '/about', component: HomePage },
        { path: '/message', component: HomePage },
        { path: '/reading', component: ReadPage },
    ],
})

export default router
