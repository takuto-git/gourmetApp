import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Result from "./views/Result";
import GMap from "./views/Map";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "top",
        component: Top
    },
    {
        path: "/result",
        name: "result",
        component: Result
    },
    {
        path: "/Gmap",
        name: "Gmap",
        component: GMap
    }
];

export default new VueRouter({
    routes: routes
})

