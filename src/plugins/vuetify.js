


import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework'



Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
      icons: {
        iconfont: 'md',
        values: {},
      },
     
      rtl: false,
      theme: {
        dark: true,
        default: 'dark',
        disable: false,
        options: {
          cspNonce: undefined,
          customProperties: undefined,
          minifyTheme: undefined,
          themeCache: undefined,
          vertical:false,
        },
        themes: {
          light: {
            primary: '#FF5252',
            secondary: '#d674ca',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
          dark: {
            primary: '#339900',
            secondary: '#d674ca',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },


});
