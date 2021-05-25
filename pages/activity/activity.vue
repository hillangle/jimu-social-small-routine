<template>
	<view class="container">
		<view class="header">
			<view class="title">活动列表</view>
			<!-- <image src="~@/static/images/other/sx.png" mode="" class="pic"></image> -->
		</view>
		<view class="list" v-for="(item,index) in activitys" :key="index">
			<view class="item">
				<image :src="item.img" mode="" class="pic"></image>
				<view class="item-content">
					<h2>{{ item.name }}</h2>
					<h3><b>时间：</b>{{ item.activityTime }}</h3>
					<h3><b>介绍：</b>{{ item.content }}</h3>
				</view>
			</view>
		</view>
		<footerSocial/>
	</view>
</template>

<script>
import footerSocial from '@/components/footer/footer.vue'
import {getActivityList} from '../../common/api/activity.js'
import {Base64} from '../../js_sdk/js-base64/base64.js'
var user;

export default {
	data() {
		return {
			query:{
				status: ""
			},
			activitys:[]
		};
	},
	components:{
		footerSocial
	},
	methods: {
		getData(){
			this.activitys = [];
			this.query.status = '0';
			getActivityList(this.query).then(res => {
				if(res[1].data.httpCode == '200'){
					let activitys = JSON.parse(res[1].data.resultData);
					// var Base64 = require('js-base64').Base64;
					for(let i = 0; activitys.length > i; i++){
						let imgBase = uni.arrayBufferToBase64(new Uint8Array(activitys[i].img));
						this.activitys.push({
							"img":'data:image/png;base64,' + imgBase,
							"name":activitys[i].name,
							"activityTime":activitys[i].activityTime,
							"content":activitys[i].content
						});
					}
					console.log(this.activitys);
				}else{
					uni.navigateTo({
						url: '/pages/login/login.vue'
					})
				}
			})
		}
	},
	onLoad(){
		if(uni.getStorageSync("user") == undefined || uni.getStorageSync("user") == ''){
			uni.navigateTo({
				url: '../../pages/login/login'
			})
		}else{
			user = JSON.parse(uni.getStorageSync("user"));			
		}
		this.getData()
	}
};
</script>

<style>
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
		padding: 0 30rpx 200rpx;
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
		width: 200rpx;
		height: 284rpx;
		margin-right: 20rpx;
	}
	.item-content{
		width: 470rpx;
	}
	.item-content h2{
		font-size: 32rpx;
		color:#333;
		font-weight: 600;
		line-height: 50rpx;
		margin: 0 0 10rpx;
		padding: 0;
	}
	.item-content h3{
		font-size: 28rpx;
		color:#999;
		font-weight: normal;
		line-height: 40rpx;
	}
	.item-content h3 b{
		font-weight: bold;
	}
	.footer{
		width: 750rpx;
		height: 260rpx;
		position: fixed;
		left:0;
		bottom: 0;
		padding-top: 70rpx;
		box-sizing: border-box;
		background-color: #fff;
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
