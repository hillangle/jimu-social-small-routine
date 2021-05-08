<template>
	<view class="container">
		<view class="header-top">
			<view class="pic">
				<image src="~@/static/images/indexNew/pic.png" alt="">
				<view class="photo"><image src="~@/static/images/indexNew/photo.png" alt=""></view>
			</view>
			<view class="font">Myrtle Watson</view>
			<view class="tabs"><text>22岁</text><text>魔羯座</text><text>小标签</text></view>
			<view class="descript">摩羯座还没有写个性签名～</view>
			<view class="pictier">
				<view class="pictier-item pictier-on">
					<image src="~@/static/images/indexNew/pic01.png" mode=""></image>
				</view>
				<view class="pictier-item">
					<image src="~@/static/images/indexNew/pic02.png" mode=""></image>
				</view>
				<view class="pictier-item">
					<image src="~@/static/images/indexNew/pic03.png" mode=""></image>
				</view>
				<view class="pictier-item">
					<image src="~@/static/images/indexNew/pic04.png" mode=""></image>
				</view>
				<view class="pictier-item">
					<image src="~@/static/images/indexNew/pic05.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="item" v-for="(item,index) in infoList" :key="index">
				<image :src="item.url" mode=""></image>
				{{ item.text }}
			</view>
		</view>
		<view class="footer">
			<view class="footer-content">
				<view class="foot-item foot-item01 on">
					<view class="foot-bg"></view>
					<text>附近广场</text>
				</view>
				<view class="foot-item foot-middle">
					<image src="~@/static/images/indexNew/center.png" mode=""></image>
				</view>
				<view class="foot-item foot-item02">
					<view class="foot-bg"></view>
					<text>活动</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {getUserInfo} from "../../common/api/index.js"
export default {
	data() {
		return {
			infoList: [
				{
					url: '/static/images/indexNew/list01.png',
					text: '微信'
				},
				{
					url: '/static/images/indexNew/list02.png',
					text: '抖音'
				},
				{
					url: '/static/images/indexNew/list03.png',
					text: '微博'
				},
				{
					url: '/static/images/indexNew/list04.png',
					text: '快手'
				},
				{
					url: '/static/images/indexNew/list05.png',
					text: '抖音'
				},
				{
					url: '/static/images/indexNew/list06.png',
					text: '微博'
				},
				{
					url: '/static/images/indexNew/list06.png',
					text: '微信'
				},
				{
					url: '/static/images/indexNew/list03.png',
					text: '抖音'
				},
				{
					url: '/static/images/indexNew/more.png',
					text: '更多'
				},
			]
		};
	},
	components: {
		
	},
	methods: {
		getData(){
			getUserInfo().then(res => {
				console.log(res);
			})
		}
	}
};
</script>

<style>

.header-top {
	background: url(~@/static/images/indexNew/bg.png) no-repeat center;
	background-size: cover;
	width: 750rpx;
	height: 720rpx;
	color: #fff;
	padding: 138rpx 45rpx 0;
	box-sizing: border-box;
}
.pic{
	width: 200rpx;
	height: 200rpx;
	border-radius: 28rpx;
	border: 2rpx solid #FFFFFF;
	position: relative;
	
}
.pic image{
	width: 100%;
	height: 100%;
}
.photo{
	width: 60rpx;
	height: 60rpx;
	/* border: 2rpx solid #FFFFFF; */
	box-sizing: border-box;
	border-radius: 50%;
	position: absolute;
	right: -20rpx;
	bottom: -20rpx;
	background: #1BBAE9;
}
.list{
	display: flex;
	 /*设置容器内部容器的排列方向*/	
	flex-direction: row;
	flex-wrap:wrap;
	background-color: #fff;
	padding-bottom: 40rpx;
}
.list .item{
	width: 33.33%;
	text-align: center;
	font-size: 30rpx;
	color:#333;
	height: 220rpx;
	position: relative;
	padding: 40rpx 0;
	box-sizing: border-box;
}
.list .item image{
	width: 100rpx;
	height: 100rpx;
	display: block;
	margin: 0 auto 25rpx;
}
.list .item::after{
	content:'';
	width: 1rpx;
	height: 140rpx;
	background:rgba(238,238,238,0.5);
	position: absolute;
	top:40rpx;
	right: 0;
}
.list .item:nth-child(3n)::after{
	display: none;
}
.font{
	font-weight: 500;
	color: #FFFFFF;
	line-height: 40rpx;
	font-size: 28rpx;
	margin-top: 30rpx;
}
.tabs text{
	display: inline-block;
	min-width: 86rpx;
	height: 38rpx;
	background: #1BBAE9;
	border-radius: 16rpx;
	line-height: 38rpx;
	font-size: 22rpx;
	text-align: center;
	padding: 0 5rpx;
	margin: 20rpx 15rpx 20rpx 0;
}
.descript{
	font-size: 24rpx;
	color:#fff;
	line-height: 34rpx;
}
.pictier{
	display: flex;
	 /*设置容器内部容器的排列方向*/	
	flex-direction: row;
	flex-wrap:wrap;
	margin-top: 80rpx;
}
.pictier-item{
	width: 100rpx;
	height: 100rpx;
	border-radius: 12rpx;
	box-sizing: border-box;
	margin-right: 20rpx;
	overflow: hidden;
}
.pictier-item image{
	width: 100%;
	height: 100%;
}
.pictier-on{
	border: 2rpx solid #FFFFFF;
}
.list{
	padding-bottom: 280rpx;
}
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
