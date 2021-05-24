<template>
	<view class="footer">
		<view class="footer-content">
			<view class="foot-item foot-item01 on" @tap="personCenter">
				<view class="foot-bg"></view>
				<text>附近广场</text>
			</view>
			<view class="foot-item foot-middle" @tap="index">
				<image src="~@/static/images/indexNew/center.png" mode=""></image>
			</view>
			<view class="foot-item foot-item02" @tap="activity">
				<view class="foot-bg"></view>
				<text>活动</text>
			</view>
		</view>
	</view>
</template>

<script> 
export default {
	data() {
		return {
			
		}
	},
	computed:{
	},
	components: { 
	},
	methods: {
		index(){
			uni.navigateTo({
				url: '../../pages/indexV1.0/indexV1.0'
			})
		},
		personCenter(){
			uni.navigateTo({
				url: '../../pages/square/square'
			})
		},
		activity(){
			uni.navigateTo({
				url: '../../pages/activity/activity'
			})
		}
	},
};
</script>

<style>
	.footer{
		width: 750rpx;
		height: 260rpx;
		position: fixed;
		left:0;
		bottom: 0;
		padding-top: 70rpx;
		box-sizing: border-box;
		background-color: #F2F4F6;
	}
	.footer-content{
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 1rpx 0rpx 0rpx #DBDBDB;
		height: 190rpx;
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row;
		flex-wrap:wrap;
		padding-top: 40rpx;
		box-sizing: border-box;
		background: url(~@/static/images/indexNew/foot-bg.png) no-repeat center;
		background-size: 100% 100%;
	}
	.foot-item{
		width: 33.33%;
		text-align: center;
		color:#000;
		font-size: 24rpx;
		height: 34rpx;
	}
	
	.foot-item01 .foot-bg{
		width: 36rpx;
		height: 42rpx;
		background: url(~@/static/images/indexNew/foot01.png) no-repeat center;
		background-size: 100% 100%;
		margin: 0 auto 10rpx;
	}
	.foot-item01.on .foot-bg{
		background: url(~@/static/images/indexNew/foot01-on.png) no-repeat center;
		background-size: 100% 100%;
	}
	.foot-item02 .foot-bg{
		background: url(~@/static/images/indexNew/foot01.png) no-repeat center;
		background-size: 100% 100%;
		width: 44rpx;
		height: 38rpx;
		margin: 0 auto 10rpx;
	}
	.foot-item02.on .foot-bg{
		background: url(~@/static/images/indexNew/foot02-on.png) no-repeat center;
		background-size: 100% 100%;
	}
	.foot-middle image{
		width: 100rpx;
		height: 100rpx;
	}
</style>
