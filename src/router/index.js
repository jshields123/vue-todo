import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";
import TodoDetails from '../views/TodoDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/todo/123",
    name: "TodoDetails",
    component: TodoDetails,
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
