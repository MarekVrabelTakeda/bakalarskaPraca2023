<!--================================
=            BASEHEADER            =
=================================-->
<template>
  <div class="transparent ma-3">
    <v-row>
      <v-list-item three-lin>
        <v-list-item-content>
          <v-list-item-title  class="mt-5">
            <h2 class="font-weight-medium "><slot name="page-header"></slot></h2>
          </v-list-item-title>
          <v-list-item-subtitle>Bachelor Vrabel App</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "base-header",
  data() {
    return {
      title: "Dashboard",
      breadcrumbs: [],
    };
  },
};
</script>
<style scoped>
.base-header {
  margin-top: 180px;
  margin-bottom:20px;
  margin-left: 20px;
}
.page-header {
  font-size: 22px;
  font-weight: bolder;
color:"primary";

}
</style>
<!--====  End of BASEHEADER  ====-->