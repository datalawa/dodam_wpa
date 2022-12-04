import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "../views/Dashboard";
import Test from "../components/Test";
import Login from "../views/Login"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Dashboard},
        {path: '/test', component: Test},
        {path: '/login', component: Login},
    ]
});

export default router;
