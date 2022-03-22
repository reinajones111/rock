import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    quotes: mock,
    currentQuote: "rocks are cool",
  },
  render: h => h(App)
}).$mount('#app')
