import { createRouter, createWebHashHistory } from 'vue-router';
import DashBoard from '../views/DashBoard';
import FreeBoard from '../views/FreeBoard';
import ComplainBoard from '../views/ComplainBoard';
import SurveyBoard from '../views/SurveyBoard';
import LoginPage from '../views/LoginPage';
import NoticeBoard from "@/views/NoticeBoard";

// Vue 라우터 인스턴스 생성
const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        // TODO: 추가한 페이지 여기에 추가
        {path: '/', redirect: '/dash'},
        {path: "/dash", component: DashBoard},
        {path: "/notice", component: NoticeBoard},
        {path: "/free", component: FreeBoard},
        {path: "/complain", component: ComplainBoard},
        {path: "/survey", component: SurveyBoard},
        {path: "/login", component: LoginPage},
    ]
});

export default router;
