<template>
	<view class="header-top" :style="{backgroundImage: 'url('+banner+')'}">
		<!-- <view class="scroll">
			公告信息：<textscroll :text="textList"/>
		</view> -->
		<view class="bj" @tap="editUser"><text>编辑材料</text></view>
		<view class="pic">
			<image :src="user.image" alt="">
			<view class="photo">
				<!-- <image src="~@/static/images/indexNew/photo.png" alt=""> -->
				<uni-file-picker
					limit="1" 
					fileMediatype="image" 
					v-model="imageValue" 
					mode="grid" 
					ref="files"
					@select="select"
					@progress="progress" 
					@success="success" 
					@fail="fail" 
					@delete="deleteImg"
				>
				</uni-file-picker>
			</view>
		</view>
		<view class="font" v-model="user.userName">{{user.userName}}</view>
		<view class="tabs"><text>{{user.age}}岁</text><text>{{user.constellation}}</text></view>
		<view class="descript">{{user.remark}}</view>
		<view class="pictier">
			<view class="pictier-item pictier-on" v-for="(item,index) in user.photos" :key="index">
				<image mode="aspectFill" :src="item"></image>
			</view>
		</view>
	</view>
</template>

<script>
/* import textscroll from '@/components/text-scroll/text-scroll.vue' */
import {getUserInfo,getAge,getConstellation} from "../../common/api/index.js"
import {baseUrl} from "../../common/app.js"
export default {
	data() {
		return {
			textList:'网站3.30日22：00-24：00将进行更新，将导致app不能使用，此时间段内请不要访问',
			user: {
				userName: "",
				remark: "",
				age: "",
				constellation: "",
				image: "",
				photos: []
			},
			banner:"../../static/images/indexNew/bg.png",
			imageValue:[]
		};
	},
	components: {
		/* textscroll */
	},
	methods: {
		getUserBaseInfo(){
			this.user.photos = [];
			getUserInfo().then(res => {
				if(res[1].data.httpCode == '200'){
					let user = JSON.parse(res[1].data.resultData);
					let n = 0;
					uni.setStorageSync("user",res[1].data.resultData);
					this.user.userName = user.userName;
					this.user.remark = user.remark == undefined ? user.userName + "还没有写个性签名~" : user.remark;
					this.user.age = user.birthday == undefined ? "未知" : getAge(user.birthday);
					this.user.constellation = user.birthday == undefined ? "未知" : getConstellation(user.birthday);
					for(let i = 0; i < user.userPhotos.length; i++){
						if(user.userPhotos[i].fileType == "0"){
							this.user.image = user.userPhotos[i].attaPath;
						}else if(user.userPhotos[i].fileType == "1") {
							this.user.photos.push(user.userPhotos[i].attaPath);
							if(n == 0){
								this.banner = user.userPhotos[i].attaPath;
							}
							n++;
						}
					}
				}else{
					uni.navigateTo({
						url: '../../pages/login/login'
					})
				}
			})
		},
		editUser(){
			uni.navigateTo({
				url: '../../pages/edit/edit'
			})
		},
		// 获取上传状态
		select(e){
		    console.log('选择文件：',e)
		},
		 // 获取上传进度
		progress(e){
		    console.log('上传进度：',e)
		},
		// 上传成功
		success(e){
		    console.log('上传成功',e);
			this.form.images.push({
				"attaName":e.tempFiles[0].name,
				"attaPath":e.tempFiles[0].url,
				"fileType":"1",
				"attaType":e.tempFiles[0].extname
			});
		},
		// 上传失败
		fail(e){
		    console.log('上传失败：',e)
		},
		deleteImg(e){
			console.log(e)
			// this.form.imageValue.delete
		}
	}
};
</script>

<style>
	.header-top {
		background-size: cover;
		width: 750rpx;
		height: 720rpx;
		color: #fff;
		padding: 30rpx 45rpx 0;
		box-sizing: border-box;
	}
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
		background-image: url(../../static/images/indexNew/photo.png);
		background-size: contain;
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
