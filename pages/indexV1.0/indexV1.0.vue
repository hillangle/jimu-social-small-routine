<template>
	<view class="container">
		<header-vue ref="headerSocial"/>
		<view class="list">
			<view class="item" v-for="(item,index) in infoList" :key="index">
				<image :src="item.url" mode=""></image>
				{{ item.text }}
			</view>
			<view class="item" @tap="addSocial">
				<image src="/static/images/indexNew/more.png" mode=""></image>
				更多
			</view>
		</view>
		<uni-popup id="popupShare" ref="popupShare" type="share" >
			<uni-popup-share @select="select" v-on:childGetData='getData'></uni-popup-share>
		</uni-popup>
		<footerSocial/>
	</view>
</template>

<script>
import {getUserSocial} from "../../common/api/index.js"
import {baseUrl} from "../../common/app.js"
import headerSocial from '../../components/header/header.vue'
import uniPopupShare from '../../components/uni-popup/uni-popup-share.vue'
import footerSocial from '../../components/footer/footer.vue'
import {Base64} from '../../js_sdk/js-base64/base64.js'

export default {
	data() {
		return {
			inputShow:false,
			infoList: []
		};
	},
	components: {
		"header-vue": headerSocial, 
		"uni-popup-share":uniPopupShare,
		footerSocial
	},
	methods: {
		getData(){
			this.infoList = [];
			getUserSocial().then(res => {
				if(res[1].data.httpCode == '200'){
					let socials = JSON.parse(res[1].data.resultData);
					// var Base64 = require('js-base64').Base64;
					for(let i = 0; socials.length > i; i++){
						let imgBase = uni.arrayBufferToBase64(new Uint8Array(socials[i].img));
						this.infoList.push({"url":Base64.decode(imgBase),"text":socials[i].name});
					}
				}else{
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				}
			})
			this.$nextTick(() => {
				this.$refs.headerSocial.getUserBaseInfo();
			})
		},
		addSocial(){
			this.$refs.popupShare.open()
		},
		open(){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.open('center')
		},
		close(){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.close('center')
		}
	},
	onLoad(){
		this.getData()
	}
};
</script>

<style>
.scroll{
	font-size: 30rpx;
	color: #fff;

}
.header-top>>>._notice{
	display: inline-block;
	width: 510rpx;
	background: rgba(0,0,0,0);
	font-size: 28rpx;
	vertical-align: middle;
}
.bj {
	text-align: right;
	margin: 15rpx 0;
}
.bj text{
	height: 60rpx;
	background: #1BBAE9;
	-webkit-border-radius: 8rpx;
	border-radius: 8rpx;
	line-height: 60rpx;
	font-size: 28rpx;
	text-align: center;
	display: inline-block;
	padding: 0 20rpx 0;
	

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
	margin-top: 40rpx;
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
</style>
