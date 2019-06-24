import Vue from 'vue'
import App from './App.vue'
import Vuemoment from 'vue-moment'
Vue.config.productionTip = false
Vue.use(Vuemoment)
new Vue({
  render: h => h(App),
}).$mount('#app')
