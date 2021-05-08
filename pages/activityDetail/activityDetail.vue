<template>
	<view class="container">
		<view class="list">
			<view class="item">
				<image src="~@/static/images/other/act01.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>包豪斯四个问题《总体艺术》影响及不同的选择</h2>
					<h3><text>我要参加</text></h3>
				</view>
			</view>
		</view>
		<view class="right">
			<view class="right-item">
				<view class="fl">活动时间</view>
				<view class="fr">2021.02.09 周四</view>
			</view>
			<view class="right-item">
				<view class="fl">地址</view>
				<view class="fr">杭州市西湖区装汤街道香山路</view>
			</view>
			<view class="right-item">
				<view class="fl">费用</view>
				<view class="fr"><text>88元（全票）</text></view>
			</view>
		</view>
		<view class="detail">活动详情</view>
		<view class="text">
			<text>左手交易手续费，右手项目上币费，在疯狂增长的数字货币市场，交易所毋容置疑是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。</text>
			<image src="~@/static/images/other/act02.png" mode="" class="pic"></image>
			<text>是最大赢家，许多创业者对其趋之若鹜。同时，黑客针对交易所的安全攻击越来越多，监管所带来的不确定性也越来越大。</text>
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
	.header {
		position: relative;
		border-bottom: 1rpx solid rgba(221,221,221,0.5);
		height: 88rpx;
	}
	.header .title{
		font-size: 36rpx;
		color:#000;
		font-weight: 600;
		text-align: center;
		height: 88rpx;
		line-height: 88rpx;
	}
	.header  image{
		width: 30rpx;
		height: 34rpx;
		position: absolute;
		right: 40rpx;
		top:35rpx
	}
	.list{
		padding: 0 30rpx;
	}
	.list .item{
		padding: 40rpx 0;
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row;
		flex-wrap:wrap;
	}
	.item image{
		width: 200rpx;
		height: 284rpx;
		margin-right: 20rpx;
	}
	.item-content{
		width: 470rpx;
		position: relative;
	}
	.item-content h2{
		font-size: 32rpx;
		color:#333;
		font-weight: 600;
		line-height: 50rpx;
		margin: 0 0 10rpx;
		padding: 0;
	}
	.item-content h3 text{
		width: 296rpx;
		height: 74rpx;
		background: #1BBAE9;
		border-radius: 22rpx;
		display: inline-block;
		text-align: center;
		line-height: 74rpx;
		font-size: 28rpx;
		color:#fff;
		position: absolute;
		bottom: 5rpx;
	}
	.right-item{
		height: 100rpx;
		border-bottom: 1rpx solid rgba(221,221,221,0.5);
	}
	.right{
		padding: 0 30rpx;
	}
	.right .fl{
		font-size: 32rpx;
		color:#000;
		font-weight: bold;
		line-height: 100rpx;
	}
	.right .fr{
		font-size: 28rpx;
		color:#666;
		font-weight: 400;
		line-height: 100rpx;
	}
	.right .fr text{
		width: 176rpx;
		height: 40rpx;
		background: #FA6400;
		border-radius: 10rpx;
		text-align: center;
		line-height: 40rpx;
		color:#fff;
		font-size: 24rpx;
		display: inline-block;
	}
	.detail{
		padding: 0 30rpx;
		font-size: 28rpx;
		font-weight: 500;
		color: #666666;
		margin-top: 50rpx;
	}
	.text{
		font-size: 28rpx;
		color:#000;
		padding:0 30rpx;
		line-height: 48rpx;
	}
	.text image{
		width: 100%;
		margin: 15rpx 0;
	}
</style>
