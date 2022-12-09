import { createRouter, createWebHashHistory } from 'vue-router';
import DashBoard from '@/views/DashBoard';
import FreeBoard from '@/views/FreeBoard';
import ComplainBoard from '@/views/ComplainBoard';
import SurveyBoard from '@/views/SurveyBoard';
import LoginPage from '@/views/LoginPage';
import NoticeBoard from "@/views/NoticeBoard";
import WritePage from "@/views/WritePage";
import PaymentPage from "@/views/PaymentPage";
import InOutListView from '@/views/datalawa/InOutListView';
import InOutCardView from '@/views/datalawa/InOutCardView';
import MyCarView from '@/views/datalawa/MyCarView';
import ParkingLotView from '@/views/datalawa/ParkingLotView';
import ParkingLotB1View from '@/views/datalawa/ParkingLotB1View';
import PayListView from '@/views/datalawa/PayListView';
import ChargePage from "@/views/ChargePage";
import ParkingLotInformPage from "@/views/ParkingLotInformPage";
import NotFound from "@/views/NotFound";
import CarInOutPage from "@/views/CarInOutPage.vue";

// Vue 라우터 인스턴스 생성
const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        // TODO: 추가한 페이지 여기에 추가
        {path: '/:pathMatch(.*)*', redirect: '/404'},
        {path: '/404', component: NotFound},
        {path: '/', redirect: '/dash'},
        {path: "/dash", component: DashBoard},
        {path: "/notice", component: NoticeBoard},
        {path: "/free", component: FreeBoard},
        {path: "/complain", component: ComplainBoard},
        {path: "/survey", component: SurveyBoard},
        {path: "/login", component: LoginPage},
        {path: "/fee", component: ChargePage},
        {path: "/inout", component: CarInOutPage},
        {path: "/write", component: WritePage, name: 'write'},
        {path: '/payments', component: PaymentPage},
        {path: '/parkinglot/:layer', name:'ParkingLotInform', component: ParkingLotInformPage, props: true},
        {path: '/datalawa/inout', name: 'InOutListView', component: InOutListView},
        {path: '/datalawa/inoutcard', name: 'InOutCardView', component: InOutCardView},
        {path: '/datalawa/mycar', name: 'MyCarView', component: MyCarView},
        {path: '/datalawa/parkinglot', name: 'ParkingLotView', component: ParkingLotView},
        {path: '/datalawa/parkinglotB1', name: 'ParkingLotB1View', component: ParkingLotB1View},
        {path: '/datalawa/paylist', name: 'PayListView', component: PayListView}
    ]
});

export default router;
