<template>
	<view class="container">
		<view class="list">
			<view class="item" v-for="(item,index) in groups" :key="index">
				<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
				<view class="item-content">
					<h2>{{item.name}}</h2>
					<view class="view-text"><image src="~@/static/images/other/hot.png" mode=""></image>17673参与</view>
				</view>
				<view class="jr over-jr" v-if="item.show">已加入</view>
				<view class="jr" v-else><text>+</text>加入</view>
			</view>
		</view>
	</view>
</template>

<script>
import {getAllGroup,getUserGroup} from '../../common/api/group.js'
export default {
	data() {
		return {
			query:{
				status: ""
			},
			groups: [
				
			]
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
					tmp.push({'unid':groupList[i].unid,'name':groupList[i].name,'show':false});
				}
				getUserGroup().then(res => {
					if(res[1].data.resultCode === "true"){
						let userGroupList = JSON.parse(decodeURIComponent(res[1].data.resultData));
						for(let j=0; userGroupList.length > j; j++){
							let unid = userGroupList[j].unid;
							let name = userGroupList[j].name;
							userTmp.push({"unid":unid,"name":name,"show":true});
						}
						console.log(userTmp);
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
				console.log(this.groups);
			})
		}
	},
	onLoad(){
		this.getData()
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
