import {createStore} from "vuex";
import {sidebarSelector} from "@/store/modules/sidebarSelector";

export default createStore({
    modules: { sidebarSelector }
});