<template>
	<view class="uni-popup-pay">
<!-- 		<view class="uni-pay-title">
			<text class="uni-pay-title-text">{{ title }}</text>
		</view> -->
		<view class="uni-pay-box">
			<view class="uni-pay-item" :class="{selectActice:i==index}" v-for="(item, index) in payData" :key="index" @click.stop="select(item, index)">
				<image class="uni-pay-image" :src="item.icon" mode="aspectFill"></image>
				<text class="uni-pay-text">{{ item.text }}</text>
			</view>
		</view>
		<view class="uni-pay-button-box"><view @click="close">去支付</view></view>
	</view>
</template>

<script>
export default {
	name: 'UniPopupPay',
	props: {
		title: {
			type: String,
			default: '指纹登录'
		}
	},
	inject: ['popup'],
	data() {
		return {
			i:'',
			payData: [
				{
					icon: '../../../static/images/personalCenter/alpay-icon.png',
					text: '支付宝付款'
				},
				{
					icon: '../../../static/images/personalCenter/wechat-icon.png',
					text: '微信付款'
				},
				{
					icon: '../../../static/images/personalCenter/otherPay-icon.png',
					text: '其他付款方式'
				}
			]
		};
	},
	created() {},
	methods: {
		/**
		 * 选择内容
		 */
		select(e,index) {
			this.i=index;
			console.log(i)
		},
		/**
		 * 关闭窗口
		 */
		close() {
			this.popup.close();
		}
	}
};
</script>
<style lang="scss" scoped>
.uni-popup-pay {
	background-color: #fff;
	padding-bottom: 10px;
}
.uni-pay-title {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: left;
	height: 40px;
	padding-left: 20px;
	font-size: 16px;
	color: #000;
}
.uni-pay-title-text {
	font-size: 16px;
	color: #333;
}
.uni-pay-content {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	padding-top: 10px;
}

.uni-pay-content-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	flex-wrap: wrap;
	width: 360px;
}

.uni-pay-item {
	width: 100%;
	padding:30rpx;
	box-sizing:border-box;
	display: block;
	font-size: 40rpx;
	color: #333;
	border-bottom: 1px solid #eee;
	position:relative
}
.uni-pay-item.selectActice:after{
	content: '';
	position: absolute;
	right: 50rpx;
	top: 50rpx;
	content: '';
	background: url(~@/static/images/personalCenter/select-icon.png) no-repeat;
	width: 26rpx;
	height: 26rpx;
	background-size: cover;
	
}
.uni-pay-item:last-child{
	border: none;
}

.uni-pay-content-item:active {
	background-color: #f5f5f5;
}

.uni-pay-image {
	width: 50rpx;
	height: 50rpx;
	display: inline-block;
	vertical-align: middle;
	margin: 0rpx 15rpx 0 0;
}

.uni-pay-text {
	font-size: 34rpx;
	color: #333;
	display: inline-block;
	vertical-align: middle;
}

.uni-pay-button-box {
	font-size: 30rpx;
	color: #fff;
	background-color: #0262e5;
	text-align: center;
	padding: 25rpx 0;
	box-sizing: border-box;
	border-radius: 10rpx;
	margin: 10rpx auto;
	width: 700rpx;
}

.uni-pay-button {
	flex: 1;
	border-radius: 50px;
	color: #fff;
	background-color: #0262e5;
	font-size: 14px;
}

</style>
