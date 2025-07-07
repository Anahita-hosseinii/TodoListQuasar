<template>
  <q-page padding>
    <AddTask @add-task="onAddTask" />

    <q-list bordered padding>
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggleClick="toggleTaskByClick"
      />
    </q-list>
  </q-page>
</template>

<script>
import TodoItem from 'src/components/TodoItem/TodoItem.vue'
import AddTask   from 'src/components/TodoItem/AddTask.vue'

export default {
  components: { TodoItem, AddTask },
  data() {
    return {
      tasks: [
        { id: 1, name: "task1", completed: false, time: "5min", date: "2022/10/03" },
        // …
      ]
    }
  },
  methods: {
    onAddTask(newTask) {
      const nextId = this.tasks.length
        ? Math.max(...this.tasks.map(t => t.id)) + 1
        : 1
      this.tasks.push({ id: nextId, ...newTask })
    },
    toggleTaskByClick(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.completed = !task.completed
      }
    }
  }
}
</script>
