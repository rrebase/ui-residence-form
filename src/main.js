// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
// noinspection JSUnresolvedFunction
require('bootstrap');

Vue.use(VeeValidate, {locale: 'et'});

Vue.config.productionTip = false;

Vue.prototype.$nextForm = 5;

Vue.use({
    install: function(Vue, options) {
        Object.defineProperty(Vue.prototype, "uniqId", {
            get: function uniqId() {
                return this._uid;
            }
        });
    }
});

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// jQuery.get("https://ipinfo.io", function (response) {
//   console.log(response.city, response.country);
// }, "jsonp");
