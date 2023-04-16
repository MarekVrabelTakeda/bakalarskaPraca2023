<template>
<v-row class="d-flex flex-row-reverse"  >
    <v-btn  :key="$vuetify.theme.dark" @click="$vuetify.theme.dark = !$vuetify.theme.dark" class="ma-2" large small icon>
      <v-icon :class="$vuetify.theme.dark? 'white--text' :'black--text'">
        {{ $vuetify.theme.dark ? "brightness_2" : "wb_sunny" }}
      </v-icon>
    </v-btn>
  </v-row>
</template>