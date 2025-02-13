import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import ProjectDetail from "@/components/ProjectDetails.vue";

const routes = [
    { path: "/", component: () => import("@/components/Main.vue") },
    { path: "/projects/:id", name: "ProjectDetail", component: ProjectDetail, props: true },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return { el: to.hash, behavior: "smooth" };
        } else {
            return { top: 0 };
        }
    },
});

export default router;
