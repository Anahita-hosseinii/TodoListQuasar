<template>
  <div class="row items-center q-mb-md">
    <q-btn label="Add Task" icon="add" color="primary" @click="dialog = true" />

    <q-dialog v-model="dialog">
      <DtailsAddTask
        @add-task="onAddTask"
        @close-dialog="dialog = false"
      />
    </q-dialog>
  </div>
</template>

<script>
import DtailsAddTask from './DtailsAddTask.vue'

export default {
  components: { DtailsAddTask },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    onAddTask(newTask) {
      this.$emit('add-task', newTask)  
      this.dialog = false
    }
  }
}
</script>
