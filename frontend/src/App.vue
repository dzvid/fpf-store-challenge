<template>
  <v-app>
    <nav-bar />
    <v-main class="background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({}),
});
</script>
