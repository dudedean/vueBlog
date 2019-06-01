import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Filters
Vue.filter('to-uppercase',function(val){
  return val.toUpperCase();
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
