<template>
  <div class="todo-card">
    <h2>Task: {{ todo.title }}</h2>
    <h3>Details: {{ todo.description }}</h3>
    <h3>Created at: {{ todo.time }} on {{ todo.date }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.todo-card {
  padding: 20px;
  width: 250px;
  border: 2px solid blue;
  margin-bottom: 20px;
}
.todo-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

h3 {
  font-weight: 30;
}
</style>