import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../page/landing"),
    },
    {
        path: "/cloister",
        name: "cloister",
        component: () => import("../page/cloister")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;