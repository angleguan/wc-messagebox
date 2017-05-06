import Vue from 'vue'
import App from './App'


import {Alert, Confirm, Toast} from './wc-messagebox'


Vue.use(Alert, {
	btnText: '好的'
});
Vue.use(Confirm, {
	// yes: '知道了'
});
Vue.use(Toast, {
	duration: '6500'
})

var vm = Vue.extend({
	template: '<App/>'
})


new vm({
    el: '#app',
    template: '<App/>',
    components: {App}
})



