<template>
	<view class="container">
		<view class="list">
			<view class="item">
				<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>#不怕黑大作战#</h2>
					<view class="view-text"><image src="~@/static/images/other/hot.png" mode=""></image>17673参与</view>
				</view>
				<view class="jr over-jr">已加入</view>
			</view>
			<view class="item">
				<image src="~@/static/images/other/interest02.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>#不怕黑大作战#</h2>
					<view class="view-text"><image src="~@/static/images/other/hot.png" mode=""></image>17673参与</view>
				</view>
				<view class="jr"><text>+</text>加入</view>
			</view>
			<view class="item">
				<image src="~@/static/images/other/interest03.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>#不怕黑大作战#</h2>
					<view class="view-text">17673参与</view>
				</view>
				<view class="jr"><text>+</text>加入</view>
			</view>
			<view class="item">
				<image src="~@/static/images/other/interest04.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>#不怕黑大作战#</h2>
					<view class="view-text">17673参与</view>
				</view>
				<view class="jr"><text>+</text>加入</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			
		};
	},
	components:{
	        
	},
	methods: {
		
	}
};
</script>

<style>
	.container{
		border-top: 1rpx solid rgba(221,221,221,0.5);
	}
	.list{
		padding: 0 40rpx;
	}
	.list .item{
		padding: 40rpx 0;
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row;
		flex-wrap:wrap;
		border-bottom: 1rpx solid rgba(221,221,221,0.5);
	}
	.item image{
		width: 100rpx;
		height: 100rpx;
		margin-right: 20rpx;
	}
	.item-content{
		padding-top: 10rpx;
		width: 420rpx;
	}
	.item-content h2{
		font-size: 28rpx;
		color:#333;
		font-weight: 500;
		line-height: 50rpx;
		margin: 0;
		padding: 0;
	}
	.item-content .view-text{
		font-size: 24rpx;
		color:#999;
	}
	.item-content .view-text image{
		width: 24rpx;
		height: 32rpx;
		margin-right: 5rpx;
		vertical-align: middle;
		margin-top: -10rpx;
	}
	.jr{
		width: 128rpx;
		height: 48rpx;
		background: #D4F5FF;
		border-radius: 24rpx;
		font-size: 24rpx;
		font-weight: 600;
		color: #1BBAE9;
		line-height: 48rpx;
		text-align: center;
		vertical-align: middle;
		margin-top: 30rpx;
	}
	.jr text{
		font-size: 30rpx;
		display: inline-block;
		vertical-align: top;
		margin-top:-4rpx
	}
	.over-jr{
		background: #1BBAE9;
		color:#fff
	}
</style>
