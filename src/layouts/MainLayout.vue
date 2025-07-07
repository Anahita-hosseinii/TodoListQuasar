<template>
  <q-layout view="lHh Lpr lFf">

    <!-- هدر ثابت با عرض 100% و سایه -->
    <q-header elevated fixed class="my-header">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          TodoAwsome
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- کشوی کناری -->
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="756"
      show-if-above
      bordered
      content-class="bg-blue-grey-3"
    >
      <q-list padding>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- محتوای اصلی -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- فوتر که فقط روی صفحه‌های کوچک نمایش داده می‌شود -->
    <q-footer v-if="$q.screen.lt.md" elevated class="bg-grey-2">
      <q-tabs
        dense
        align="justify"
        class="text-primary"
        active-color="primary"
        indicator-color="primary"
      >
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          :name="link.title"
          :icon="link.icon"
          :label="link.title"
          :to="link.link"
        />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  { title: 'ToDo', icon: 'list', link: '/' },
  { title: 'Settings', icon: 'settings', link: '/settings' }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style>
/* اطمینان از عرض 100% هدر و قرارگیری دقیق */
.my-header {
  width: 100% !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999; /* اگر بخوای هدر همیشه روی همه چیز باشه */
}
</style>
