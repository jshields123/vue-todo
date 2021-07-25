<template>
  <div v-if="todo">
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.time }} {{ todo.date }} at {{ todo.location }}</p>
    <p>Details: {{ todo.description }}</p>
    <p>Created by: {{ todo.creator }}</p>
  </div>
</template>

<script>
import TodoService from "@/services/TodoService.js";

export default {
  props: ["id"],
  data() {
    return {
      todo: null,
    };
  },
  created() {
    TodoService.getTodo(this.id)
      .then((response) => (this.todo = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
