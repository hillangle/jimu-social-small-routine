<template>
	<view class="container">
		<uni-file-picker 
			limit="9" 
			title="最多选择9张图片"
			v-model="imageValue" 
			fileMediatype="image" 
			mode="grid" 
			ref="files"
			@select="select" 
			@progress="progress" 
			@success="success" 
			@fail="fail" 
			@delete="deleteImg"
		></uni-file-picker>
		<view class="list">
			<view class="item">
				<view class="fl">昵称</view>
				<view class="fr">
					<input class="uni-input" style="width:70%;margin-top:10px;" v-model="form.userName" placeholder="" />
					<!-- <image src="~@/static/images/other/next.png" alt=""> -->
				</view>
			</view>
			<view class="item">
				<view class="fl">性别</view>
				<view class="fr">
					<picker @change="sexChange" :value="form.sex" v-model="form.sex" :range="array" mode="selector">
						<view class="uni-input">{{array[form.sex]}}</view>
					</picker>
					<!-- <image src="~@/static/images/other/next.png" alt=""> -->
				</view>
			</view>
			<view class="item">
				<view class="fl">出生日期</view>
				<view class="fr">
					<picker mode="date" :value="form.birthday" v-model="form.birthday" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{form.birthday}}</view>
					</picker>
				</view>
			</view>
			<view class="item" style="border-bottom:0;">
				<view class="fl">签名内容</view>
				<view class="fr" style="width: 100%;">
					<textarea style="padding-left: 80rpx;" v-model="form.remark" placeholder="" auto-height />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {editUserInfo} from "../../common/api/index.js"
let user = JSON.parse(uni.getStorageSync("user"));

export default {
	data() {
		const currentDate = this.getDate({
			format: true
		})
		return{
			array: ['未知','男','女'],
			form:{
				"userName":"",
				"sex":"",
				"unid":"",
				"birthday":"",
				"remark":"",
				"images":[]
			},
			date: currentDate,
			imageValue:[]
		}
	},
	onNavigationBarButtonTap(e){
		editUserInfo(this.form).then(res => {
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
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
			}
	},
	components: {
	},
	methods: {
		sexChange(e) {
			this.form.sex = e.target.value
	    },
		bindDateChange(e){
			this.form.birthday = e.target.value
		},
		getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        },
		getData(){
			if(user != null){
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				this.form.unid = user.unid;
				this.form.sex = user.sex === undefined ? 0 : user.sex;
				this.form.birthday = user.birthday === undefined ? year+'-'+month+'-'+day : user.birthday	;
				this.form.remark = user.remark;
				this.form.userName = user.userName;
				
				for(let i = 0; i < user.userPhotos.length; i++){
					if(user.userPhotos[i].fileType == "1"){
						this.imageValue.push({
							"path":user.userPhotos[i].attaPath,
							"tempFilePaths":[user.userPhotos[i].attaPath],
							"tempFiles":[{
								"extname":user.userPhotos[i].attaType,
								"fileType":"image",
								"name":user.userPhotos[i].attaName,
								"url":user.userPhotos[i].attaPath,
								"image":{
									"location":user.userPhotos[i].attaPath
								}
							}]
						})
					}
				}
				console.log(this.imageValue);
			}else{
				uni.redirectTo({
					url: '../login/login'
				})
			}
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
	},
	created(){
		this.getData();
	}
}
</script>

<style>
.container{
	padding: 35rpx;
	border-top: 1rpx solid rgba(221,221,221,0.5);
}
.list{
	padding:  0 40rpx;
}
.list .item{
	line-height: 100rpx;
	height: 100rpx;
	border-bottom: 1rpx solid rgba(221,221,221,0.5);
}
.list .item .fl{
	font-size: 28rpx;
	color: #666666;
}
.list .item .fr{
	font-size: 28rpx;
	color: #000;
	padding-right: 45rpx;
	position: relative;
}
.list .item .fr image{
	width: 18rpx;
	height: 28rpx;
	right: -45rpx;
	top: 5rpx;
}
</style>
