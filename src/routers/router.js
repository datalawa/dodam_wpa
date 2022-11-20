import { createRouter, createWebHashHistory } from 'vue-router';
import DashBoard from '../views/DashBoard';
import FreeBoard from '../views/FreeBoard';
import ComplainBoard from '../views/ComplainBoard';
import SurveyBoard from '../views/SurveyBoard';
import DefaultPage from "@/components/DefaultPage";

// Vue 라우터 인스턴스 생성
const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/dash'},
        {path: "/dash", component: DashBoard},
        {path: "/free", component: FreeBoard},
        {path: "/complain", component: ComplainBoard},
        {path: "/survey", component: SurveyBoard},
        {path: "/test", component: DefaultPage},
    ]
});

export default router;
