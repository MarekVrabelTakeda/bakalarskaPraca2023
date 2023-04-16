<template>

      <v-container class="pa-2 mt-2">
        <v-menu transition="scroll-y-transition" flat v-for="item in menu" :key="item.title" open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
           
            <v-btn text centered   small v-bind="attrs" v-on="on">
              <v-icon   small class="ma-1 pl-2" dark>
                {{item.action}}
              </v-icon>
             <div class="d-none d-lg-block"> {{item.title}}</div>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="{ path: '/' + subItem.path }">
              <v-list-item-title>{{subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>


</template>
<script>
  import menu from "../../utils/menu.js"



export default {
    data() {
        return {
            menu:menu, 
        }
    },
    
}
</script>
<style>
.logo-horizontal img{
  width:180px;
  padding:10px;

}
.drawer-horizontal{
  margin-bottom:150px;
}

</style>