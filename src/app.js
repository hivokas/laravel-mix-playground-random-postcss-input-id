import Vue from 'vue';

Vue.component('demo-1', import('./Demo1'));
Vue.component('demo-2', import('./Demo2'));

new Vue().$mount('#app');
