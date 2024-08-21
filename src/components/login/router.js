import { createRouter, createWebHistory } from 'vue-router'
import Login from "./UserLogin.vue";
import Reg from "./UserReg.vue"
import Home from "./HomePage.vue"
import PhotoDetail from "../galary/PhotoDetails.vue"

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/regtration",
        name: "Regtration",
        component: Reg
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/photo-detail/:id",
        name : "PhotoDetail",
        component: PhotoDetail,
    },

]

const router = createRouter({
   history: createWebHistory(),
    routes
})

export default router