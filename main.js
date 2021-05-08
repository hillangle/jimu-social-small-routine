import Vue from 'vue'
import App from './App'
import sunUiPassword from './components/sunui-password/sunui-password.vue'
Vue.component('sunui-password',sunUiPassword);
Vue.config.productionTip = false


Vue.prototype.websiteUrl

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
