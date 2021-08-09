import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../views/TodoList.vue";
import TodoDetails from '../views/TodoDetails.vue'
import About from '../views/About.vue'
import BaseInput from '../views/Form.vue'

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/todo/create",
    name: "Form",
    props: true,
    component: BaseInput,
  },
  {
    path: "/todo/:id",
    name: "TodoDetails",
    props: true,
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
