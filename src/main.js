import Vue from 'vue'
import App from './App'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
