<template>
  <div class="todos">
    <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoCard from "@/components/TodoCard.vue";

export default {
  name: "Home",
  components: {
    TodoCard,
  },
  data() {
    return {
      todos: [
        {
          id: 123,
          category: "work",
          title: "Create a vue app",
          description: "An app to track things I need to do",
          location: "my laptop",
          date: "18/07/2021",
          time: "9:00",
          creator: "Jack Shields",
        },
        {
          id: 124,
          category: "exercise",
          title: "Run",
          description: "A run to the top of gladstone park, round and back",
          location: "Flat to Gladstone park",
          date: "19/07/2021",
          time: "14:00",
          creator: "Jack Shields",
        },
      ],
    };
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