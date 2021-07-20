import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";
import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/about",
    name: "About",
 
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
