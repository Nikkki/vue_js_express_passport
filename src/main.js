import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './components/App.vue'
// import router from './router/index';
// import {store} from './store/store';


Vue.use(Vuetify);



new Vue({
  el: '#app',
  //store,
  render: h => h(App)
  //router
  // components:{
  //   'icon': Icon
  // }
})


