<template>
  <q-card style="min-width: 300px">
    <q-card-section>
      <div class="text-h6">Add New Task</div>
    </q-card-section>

    <q-card-section>
      <q-input v-model="newTaskName" label="Task Name" clearable />
    </q-card-section>

    <q-card-actions>
      <q-btn flat label="Cancel" color="primary" v-close-popup @click="$emit('close-dialog')" />
      <q-btn
        flat
        label="Save"
        color="primary"
        :disable="!newTaskName"
        @click="saveTask"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "DtailsAddTask",
  data() {
    return {
      newTaskName: ''
    }
  },
  methods: {
    saveTask() {
      this.$emit('add-task', {
        name: this.newTaskName,
        completed: false,
        time: '0min',
        date: new Date().toISOString().split('T')[0]
      })
      this.newTaskName = ''
      this.$emit('close-dialog')
    }
  }
}
</script>
