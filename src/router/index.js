import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";

const routes = [
    {
        path: "/",
        component: App,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            return { top: 0 };
        }
    },
});

export default router;
