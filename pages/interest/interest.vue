<template>
	<view class="container">
		<view class="list">
			<view class="item" v-for="(item,index) in groups" :key="index">
				<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>{{item.name}}</h2>
					<view class="view-text"><image src="~@/static/images/other/hot.png" mode=""></image>{{item.count}}参与</view>
				</view>
				<view class="jr over-jr" v-if="item.show" @tap="outGroup(item)">已加入</view>
				<view class="jr" v-else @tap="addGroup(item)"><text>+</text>加入</view>
			</view>
		</view>
	</view>
</template>

<script>
import {getAllGroup,getUserGroup,addGroup,outGroup} from '../../common/api/group.js'
var user;
var pages = getCurrentPages();//当前页
var beforePage = pages[pages.length - 2];//上个页面

export default {
	data() {
		return {
			query:{
				status: ""
			},
			groups: [
				
			],
			groupParam:{
				userId:"",
				groupId:"",
				status:""
			}
		};
	},
	components:{
	        
	},
	methods: {
		getData(){
			this.query.status = '0';
			getAllGroup(this.query).then(res => {
				let groupList = JSON.parse(decodeURIComponent(res[1].data.resultData));
				let tmp = [];
				let userTmp = [];
				for(let i=0; groupList.length > i; i++){
					tmp.push({'unid':groupList[i].unid,'name':groupList[i].name,'show':false,'count':groupList[i].count});
				}
				getUserGroup().then(res => {
					if(res[1].data.resultCode === "true"){
						let userGroupList = JSON.parse(decodeURIComponent(res[1].data.resultData));
						for(let j=0; userGroupList.length > j; j++){
							let unid = userGroupList[j].unid;
							let name = userGroupList[j].name;
							let count = userGroupList[j].count;
							userTmp.push({"unid":unid,"name":name,"show":true,'count':count});
						}
						for(let m = 0; userTmp.length > m; m++){
							let userGroup = userTmp[m];
							for(let n = 0; tmp.length > n; n++){
								if(userGroup.unid === tmp[n].unid){
									tmp.splice(n,1);
									tmp.push(userTmp[m])
								}
							}
						}
					}
				})
				this.groups = tmp
			})
		},
		outGroup(item){
			this.groupParam.userId = user.unid;
			this.groupParam.groupId = item.unid;
			this.groupParam.status = '1';
			outGroup(this.groupParam).then(res => {
				if(res[1].data.resultCode === "true"){
					item.show = false;
					item.count -= 1;
					beforePage.$vm.updateUserGroup()
				}else{
					uni.showToast({
						image: '/static/images/other/close.png',
						title: '提交失败',
						duration: 2000
					});
				}
			})
		},
		addGroup(item){
			this.groupParam.userId = user.unid;
			this.groupParam.groupId = item.unid;
			this.groupParam.status = '0';
			addGroup(this.groupParam).then(res => {
				if(res[1].data.resultCode === "true"){
					item.show = true;
					item.count += 1;
					beforePage.$vm.updateUserGroup()
				}else{
					uni.showToast({
						image: '/static/images/other/close.png',
						title: '提交失败',
						duration: 2000
					});
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
		this.getData();
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
