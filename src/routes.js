import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/Login.vue'

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
]

Vue.use(VueRouter)
/* Produccción */
// const router = new VueRouter({mode: 'history', routes})
/* Pruebas */
const router = new VueRouter({routes})

export default router