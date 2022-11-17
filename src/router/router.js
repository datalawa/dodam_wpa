import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "../components/Dashboard";
import Test from "../components/Test";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Dashboard},
        {path: '/test', component: Test}
    ]
});

export default router;
