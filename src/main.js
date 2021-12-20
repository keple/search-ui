import { createApp } from 'vue'
import App from './App.vue'
import {createRouter , createWebHistory} from 'vue-router@next';
createApp(App).mount('#app')

const routes = [{
    path : '/',
    name : 'home',
    component : () => import('@/view/home')
    }
]

const router = createRouter ({
    history : createWebHistory(),
    routes,
})

export default router;