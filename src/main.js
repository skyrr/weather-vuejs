import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
