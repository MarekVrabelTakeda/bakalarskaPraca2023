<!--================================
=          APPLAYOUT         =
=================================-->

<template>

  <div>
    <!--APPBAR -->
    <v-app-bar app flat >
      <v-toolbar-title class="d-none d-lg-block">
        <img style="height:50px"
          :src="require(`../assets/images/${$vuetify.theme.dark ? 'logo-mini' : 'logo-mini-dark'}.png`)">
      </v-toolbar-title>

      <v-toolbar-title>
        <drawer-horizontal></drawer-horizontal>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <base-menu></base-menu>
    </v-app-bar>
    <!--MAIN -->
    <v-main :class="$vuetify.theme.dark? 'theme-dark':'theme-light'" v-resize="onResize">
      <router-view></router-view>

    </v-main>

    <!--FOOTER-->
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>MarkWeb.sk</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  import DrawerHorizontal from './Drawer/DrawerHorizontal.vue'
  import BaseMenu from './Base/BaseMenu'
  export default {
    components: {
      DrawerHorizontal,
      BaseMenu,
      VuePerfectScrollbar
    },
    data: () => ({
      drawer: false,
      links: [
        'Dashboard',
      ],
      settings: {
        maxScrollbarLength: 60
      },
      windowSize: {
        x: 0,
        y: 0,
      },

    }),
    mounted() {
      console.log(this.$vuetify.breakpoint)
      this.onResize()
    },

    computed: {
      imageHeight() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return '220px'
          case 'sm':
            return '400px'
          case 'md':
            return '500px'
          case 'lg':
            return '600px'
          case 'xl':
            return '800px'
        }
      }
    },
    methods: {
      scrollHandle(evt) {
        console.log(evt)
      },
      onResize() {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        }
      },
    }

  }
</script>
<style>
  .theme-dark {
    background: #101010 !important;
  }

  .theme-light {
    background: #f5f5f5 !important;
  }
</style>
<!--================================
=          APPLAYOUT END          =
=================================-->