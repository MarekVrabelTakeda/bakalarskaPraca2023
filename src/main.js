import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import TradingVue from 'trading-vue-js'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

Vue.use(VuePerfectScrollbar)
Vue.use(TradingVue)

Vue.use(InfiniteSlideBar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
