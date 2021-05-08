<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
</script>

<style>
/*每个页面公共css */
@import url("./common/aui/css/aui.css");
@import url("./common/aui/css/aui.iconfont.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
/* body {
	background: #f2f4f9;
} */
/* 解决自定义导航栏宽度和下边框的问题 */
.uni-navbar__content {
	width: 100%;
}
.uni-navbar--border {
	border: none !important;
}
/* 弹窗自定义样式 */
/* uni-modal .uni-modal {
	border-radius: 20rpx;
}
uni-modal .uni-modal__ft:after,
uni-modal .uni-modal__btn:after {
	border: none;
}
uni-modal .uni-modal__btn_default {
	width: 240rpx;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
	border-radius: 10rpx;
	background-color: #d0d0d0;
	margin: 0 20rpx;
	font-size: 32rpx;
	color: #fff !important;
	margin: 0 40rpx 20rpx 40rpx;
	display: inline-block;
	-webkit-box-flex: inherit;
	flex: inherit;
}

uni-modal .uni-modal__btn_primary {
	background-color: #183dea;
	color: #fff !important;
	border-radius: 10rpx;
	-webkit-box-flex: inherit;
	flex: inherit;
	width: 240rpx;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
} */
.fl{
	float: left;
}
.fr{
	float: right;
}
.uni-page-head-ft{
	text-align: right;
	margin-right: 10rpx;
}


</style>
