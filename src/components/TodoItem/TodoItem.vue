<template>
<q-item
  :class="{
    'bg-orange-1': !task.completed,
    'bg-green-2': task.completed
  }"
  clickable
  v-ripple
  @click="$emit('toggleClick', task.id)"
>
  <!-- چک‌باکس -->
  <q-item-section side top>
    <q-checkbox
      v-model="localCompleted"
      @click.stop
    />
  </q-item-section>

  <!-- نام تسک و تاریخ/زمان -->
  <q-item-section>
    <q-item-label
      :class="{ 'text-strike': task.completed }"
      class="text-subtitle1"
    >
      {{ task.name }}
    </q-item-label>

    <div class="row items-center q-mt-xs">
      <q-icon name="event" size="18px" class="q-mr-xs text-grey-7" />
      <q-item-label caption>
        {{ task.date }} - {{ task.time }}
      </q-item-label>
    </div>
  </q-item-section>

  <!-- آیکون حذف -->
<q-item-section side>
  <div class="row items-center no-wrap">
    <q-btn
      dense
      flat
      round
      icon="delete"
      color="grey-7"
      class="q-ml-sm"
    />
    <q-btn
      dense
      flat
      round
      icon="edit"
      color="grey-7"
      class="q-ml-sm"
    />
  </div>
</q-item-section>

</q-item>

</template>

<script>
export default {
  props: {
    task: Object
  },
  data (){
 return {
      localCompleted: this.task.completed
    }
}
}
</script>
