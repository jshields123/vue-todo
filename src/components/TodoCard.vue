<template>
  <div class="todo-card">
    <span>{{ todo.title }}</span>
    <h3>Created at: {{ todo.time }} on {{ todo.date }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodoCard",
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      todo: {
        id: 123,
        category: "work",
        title: "Create a vue app",
        description: "an app to track things I need to do",
        location: "my laptop",
        date: "18/07/2021",
        time: "9:00",
        creator: "Jack Shields",
      },
    };
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
</style>