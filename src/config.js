import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//此处配置浏览器标题名称
document.title = 'OAKBOSS'

export const loginConfig={
	//首页和登录页标题
    systemName:'OAKBOSS物联网平台',
	//左侧导航栏logo图片
    imgs:require("./assets/images/OAKBOSS.png"),
	//login登录页背景图片
    systemImgs:require("./assets/images/index-1.png"),
    //设备监控简称
    deviceName:'OAKBOSS',
}
	//接口路径
axios.defaults.baseURL = 'http://www.api.sqjtjt.com'

