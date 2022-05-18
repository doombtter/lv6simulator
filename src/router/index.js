import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../page/landing"),
    },
];

const router = createRouter({
    //createWebHashHistory 해시 히스토리 모드 /#/
    //createWebHistory HTML5 모드, 기본 라우트 사용
    history: createWebHistory(),
    routes,
});

export default router;