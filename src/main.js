import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
