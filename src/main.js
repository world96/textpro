import Vue from 'vue'
import App from './App.vue'
import npmTestZsj from 'npm_test_zsj'
import npm01sumzsj from 'npm-01sum-zsj'
Vue.use(npm01sumzsj)
Vue.use(npmTestZsj)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
