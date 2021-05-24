<template>
	<scroll-view class="poup-content" scroll-y="true" scroll-left="120">
		<view class="poup-list">
			<view class="item" v-for="(item,index) in userSocialList" :key="index">
				<view class="poup-item" @click="open(item.socialUnid)">
					<image :src="item.img" mode=""></image>
					{{item.name}}
					<image src="~@/static/images/other/sc.png" mode="" class="gn"></image>	
				</view>
			</view>
		</view>
		<view class="poup-list">
			<view class="item" v-for="(item,index) in socialList" :key="index">
				<view class="poup-item" @click="openOther(item.socialUnid,item.relation)">
					<image :src="item.img" mode=""></image>
					{{item.name}}
					<image src="~@/static/images/other/tj.png" mode="" class="gn"></image>	
				</view>
			</view>
		</view>
		<!-- 链接平台弹层 -->
		<uni-popup ref="popup" type="center">
			<view class="poup">
				<image src="~@/static/images/other/tips.png" mode="" ></image>	
				<h2>信息提示</h2>
				<view class="viewPanduan">
					<view class="Viewother" v-if="inputShow">
						<text>需将社交账号的二维码图片保存本地，再点击上传</text>
						<view class="sc-pictier">上传照片</view>
					</view>
					<view class="ViewAnother" v-else>
						<text class="textCenter">需输入对应的链接，再点击上传</text>
						<input class="uni-input" v-model="userSocial.link" placeholder-style="color:#999" placeholder="链接：" />
						<view class="sc-pictier" @tap="addUserSocial">提交</view>
					</view>
				</view>
				<view class="close" @click="close"><image src="~@/static/images/other/sd.png" mode="" ></image>	</view>
			</view>
		</uni-popup>
	</scroll-view>
</template>

<script>
import 
{
	getAllSocial,
	getUserSocial,
	addUserSocial,
	editUserSocial
} from "../../common/api/index.js"
import {Base64} from '../../js_sdk/js-base64/base64.js'

export default {
	data() {
		return {
			userSocialList: [],
			socialList: [],
			socialQuery: {
				status: "0"
			},
			inputShow:false,
			userSocial: {
				userUnid: "",
				socialUnid:"",
				link: "",
				status: ""
			}
		};
	},
	created() {
		this.getSocialList();
	},
	methods: {
		getSocialList(){
			getUserSocial().then(res => {
				let userSocials = JSON.parse(decodeURIComponent(res[1].data.resultData));
				for(let i = 0; userSocials.length > i; i++){
					let imgBase = uni.arrayBufferToBase64(new Uint8Array(userSocials[i].img));
					this.userSocialList.push({"img":Base64.decode(imgBase),"name":userSocials[i].name,"socialUnid":userSocials[i].unid,"relation":userSocials[i].relation});
				}
			})
			getAllSocial(this.socialQuery).then(res => {
				let socials = JSON.parse(decodeURIComponent(res[1].data.resultData));
				let tmp = [];
				for(let i = 0; socials.length > i; i++){
					let imgBase = uni.arrayBufferToBase64(new Uint8Array(socials[i].img));
					tmp.push({"img":Base64.decode(imgBase),"name":socials[i].name,"socialUnid":socials[i].unid,"relation":socials[i].relation});
				}
				for(let m = 0; this.userSocialList.length > m; m++){
					let userSocial = this.userSocialList[m];
					for(let n = 0; tmp.length > n; n++){
						if(userSocial.socialUnid === tmp[n].socialUnid){
							tmp.splice(n,1);
						}
					}
				}
				this.socialList = tmp;
			})
		},
		openOther(unid,relation){
			if(relation === '0'){
				this.inputShow = true;
			}
			this.$refs.popup.open('center');
			this.userSocial.socialUnid = unid;
		},
		addUserSocial(){
			this.userSocial.userUnid = user.unid;
			this.userSocial.status = '0';
			addUserSocial(this.userSocial).then(res => {
				if(res[1].data.resultCode === 'true'){
					this.userSocialList = [];
					this.socialList = [];
					this.getSocialList();
					this.$refs.popup.close('center');
					this.$emit('childGetData');
				}else{
					uni.showToast({
						image: '/static/images/other/close.png',
						title: '提交失败',
						duration: 2000
					});
				}
			})
		},
		open(unid){
			console.log(unid)
			this.userSocial.socialUnid = unid;
			this.userSocial.userUnid = user.unid;
			this.userSocial.status = '1';
			editUserSocial(this.userSocial).then(res => {
				if(res[1].data.resultCode === 'true'){
					this.userSocialList = [];
					this.socialList = [];
					this.getSocialList();
					this.$emit('childGetData');
				}else{
					uni.showToast({
						image: '/static/images/other/close.png',
						title: '提交失败',
						duration: 2000
					});
				}
			});
		},
		close(){
			this.userSocial = null;
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.close('center');
		}
	}
};
</script>
<style>
.poup-content{
	width: 100%;
	height: 340px;
	position: fixed;
	bottom:0rpx;
	left:0;
	background-color:#fff;
	min-height: 400rpx;
	border-radius: 50rpx 50rpx 0 0;
	/* max-height: 60%;
	overflow: auto; */
}
.poup-list{
	border-bottom: 15rpx solid #ddd;
}
.poup-list .poup-item{
	height: 60rpx;
	padding: 30rpx;
	border-bottom: 1rpx solid rgba(221,221,221,0.5);
	color:#000;
	font-size: 32rpx;
	position: relative;
}
.poup-list .poup-item image{
	width: 60rpx;
	height: 60rpx;
	vertical-align: middle;
	margin-right: 35rpx;
}
.gn{
	position: absolute;
	top:30rpx;
	right: 0;
	width: 44rpx;
	height: 44rpx;
}
.poup{
	width: 640rpx;
	height: 595rpx;
	border-radius: 20rpx;
	background-color: #fff;
	padding: 50rpx;
	margin-bottom: 1400rpx;
	box-sizing: border-box;
	text-align: center;
	position: relative;
}
.poup h2{
	font-weight: 500;
	color: #333333;
	font-size: 36rpx;
	margin-bottom: 30rpx;
}
.poup  image{
	width: 128rpx;
	height: 128rpx;
	display: inline-block;
}
.poup text{
	color: #333333;
	font-size: 30rpx;
	display: block;
	text-align: left;
}
.sc-pictier{
	width: 544rpx;
	height: 98rpx;
	background: #1BBAE9;
	border-radius: 24rpx;
	text-align: center;
	line-height: 98rpx;
	color:#fff;
	font-size: 32rpx;
	position: absolute;
	bottom: 40rpx;
}
.poup .close{
	position: absolute;
	top:30rpx;
	right: 30rpx;
}
.poup .close image{
	width: 36rpx;
	height: 36rpx;
}
.textCenter{
	text-align: center !important;
}
.ViewAnother .uni-input{
	height: 90rpx;
	border-radius: 24rpx;
	border: 2rpx solid #DBDBDB;
	text-align: left;
	padding: 0 40rpx;
	font-size: 30rpx;
	margin-top: 20rpx;
}
</style>
