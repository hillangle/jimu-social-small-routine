<template>
	<view class="container">
		<textarea placeholder-style="color:#B5B5B5" v-model="form.content" placeholder="记录这一刻，多行输入…."/>
		<view class="upload">
			<uni-file-picker
				limit="9" 
				v-model="imageValue" 
				fileMediatype="image" 
				mode="grid" 
				ref="files"
				style="width: 60%;"
				@select="select" 
				@progress="progress" 
				@success="success" 
				@fail="fail" 
				@delete="deleteImg"
			>
				<image src="~@/static/images/other/upload.png" mode=""></image>
			</uni-file-picker>
		</view>
		<!-- <view class="dw">
			<image src="~@/static/images/other/dw.png" mode=""></image>
			获取当前定位
		</view> -->
	</view>
</template>

<script>
import {addTendency} from "../../common/api/tendency.js"
var user;
	
export default {
	data() {
		return {
			cur:0,
			form:{
				content:"",
				userId:"",
				"images":[]
			},
			imageValue:[]
		};
	},
	onNavigationBarButtonTap(e){
		this.form.userId = user.unid;
		addTendency(this.form).then(res => {
			if(res[1].data.resultCode == "true"){
				uni.showToast({
					title: '提交成功',
					duration: 2000
				});
				uni.navigateBack();
			}else{
				uni.showToast({
					image: '/static/images/other/close.png',
					title: '提交失败',
					duration: 2000
				});
			}
		})
	},
	components: {
		
	},
	methods: {
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
	},
	onLoad(){
		if(uni.getStorageSync("user") == undefined || uni.getStorageSync("user") == ''){
			uni.navigateTo({
				url: '../../pages/login/login'
			})
		}else{
			user = JSON.parse(uni.getStorageSync("user"));			
		}
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
