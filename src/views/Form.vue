<template>
  <div>
    <label>Select a category</label>
    <select v-model="todo.category">
      <option
        v-for="option in categories"
        :value="option"
        :key="option"
        :selected="option === todo.category"
      >
        {{ option }}
      </option>
    </select>

    <h3>What is the name of the todo?</h3>
    <BaseInput v-model="todo.title" label="Title" type="text" />

    <h3>Describe the todo:</h3>
    <BaseInput v-model="todo.description" label="Description" type="text" />

    <h3>Where is the todo to be completed?</h3>
    <BaseInput v-model="todo.location" label="Location" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["exercise", "food", "work"],

      todo: {
        categories: "",
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
      },
    };
  },
};
</script>
