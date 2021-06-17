import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue),
Vue.use(IconsPlugin),
Vue.use(axios)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
