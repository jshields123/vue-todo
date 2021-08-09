<template>
  <div>
    <h3>What is the name of the todo</h3>
    <BaseInput v-model="todo.title" label="Title" type="text" />
    <h3>Describe the todo</h3>
    <BaseInput v-model="todo.description" label="Description" type="text" />

    <h3>Where is the todo to be completed?</h3>
    <BaseInput v-model="todo.location" label="Location" type="text" />
  </div>
</template>

