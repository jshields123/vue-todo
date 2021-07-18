<template>
  <div class="home">
    <TodoCard />
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
};
</script>
