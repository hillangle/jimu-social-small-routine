<template>
	<view class="container">
		<textarea placeholder-style="color:#B5B5B5" placeholder="记录这一刻，多行输入…."/>
		<view class="upload">
			<image src="~@/static/images/other/upload.png" mode=""></image>
		</view>
		<view class="dw">
			<image src="~@/static/images/other/dw.png" mode=""></image>
			获取当前定位
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cur:0
		};
	},
	components: {
		
	},
	methods: {
		
	}
};
</script>

<style>
.container{
	padding: 35rpx;
	border-top: 1rpx solid rgba(221,221,221,0.5);
}
textarea{
	font-size: 28rpx;
}
.upload image{
	width: 126rpx;
	height: 126rpx;
}
.dw{
	font-size: 28rpx;
	color: #1BBAE9;
	border: 4rpx solid #FAFAFA;
	display: inline-block;
	width: 268rpx;
	height: 58rpx;
	border-radius: 35rpx;
	line-height: 58rpx;
	text-align: center;
	margin-top: 50rpx;
}
.dw image{
	width: 24rpx;
	height: 28rpx;
	vertical-align: middle;
	margin-right: 30rpx;
}
</style>
