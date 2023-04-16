<template>


  <v-app class="app">
    <template v-if="!$route.meta.public">
      <transition name="slide-fade">
        <app-layout></app-layout>
      </transition>
    
    </template>

    <template v-else>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>

    </template>

  </v-app>

</template>

<script>
  import AppLayout from "./components/AppLayout";
 
  export default {
    name: "App",
    props: {
      attrs: {
        type: Object,
        default: () => ({}),
      },
    },
    components: {
      AppLayout,
    
     
    },
    data: () => ({
      show: true,
    })
  };
</script>


<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

    {
    transform: translateX(10px);
    opacity: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    box-sizing: border-box;
   
    -webkit-text-size-adjust: 100%;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
  }

</style>