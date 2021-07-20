<template>
  <div class="todos">
    <h1>Todo List App</h1>
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoCard from "@/components/TodoCard.vue";
import TodoService from "@/services/TodoService.js";

export default {
  name: "TodoList",
  components: {
    TodoCard,
  },
  data() {
    return {
      todos: null,
    };
  },
  created() {
    TodoService.getTodos()
      .then((response) => (this.todos = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>