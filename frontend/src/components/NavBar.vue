<template>
  <nav>
    <v-app-bar flat elevation="1" app color="white">
      <v-app-bar-nav-icon
        class="primary--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">
        <div class="d-flex align-center">
          <Logo class="ma-2" />
          <span class="font-weight-bold">FPF</span>
          <span>&nbsp;</span>
          <span>Store</span>
        </div>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app class="surface" v-model="drawer">
      <v-list>
        <v-subheader>GERENCIAMENTO</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

import Logo from '@/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo,
  },
  data() {
    return {
      drawer: false,
      selectedItem: 0,
      links: [
        { icon: 'mdi-archive-outline', text: 'Produtos', route: '/products' },
      ],
    };
  },
  methods: {},
});
</script>
