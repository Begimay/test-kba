import Vue from 'vue'
import App from './App.vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';

Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
