<template>
	<view class="container">
		<view class="top">
			<view class="fl">
				<image src="~@/static/images/other/position.png" mode="" class="pic"></image>
				 <picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<scroll-view scroll-x="true" class="center">
				<text @tap="changeGroup('all')">全部</text>
				<text v-for="(item,index) in groups" :key="index" @tap="changeGroup(item.unid)">
					{{item.name}}
				</text>
			</scroll-view>
			<view class="fr"><image src="~@/static/images/other/more.png" mode="" class="pic" @tap="moreGroup"></image></view>
		</view>
		<view class="list">
			<view class="list-content" v-for="(item,index) in news" :key="index">
				<view class="item">
					<image :src="item.userImg" mode="" class="pic"></image>
					<view class="item-content">
						<h2>{{item.userName}}</h2>
						<text><b>{{item.userAge}}岁</b><b>{{item.userConstellation}}</b></text>
					</view>
				</view>
				<h3>{{item.title}}</h3>
				<view class="pic-photo">
					<image :src="photo.attaPath" mode="" class="pic" v-for="(photo,index) in item.attas"></image>
					<!-- <image src="~@/static/images/other/interest01.png" mode="" class="pic"></image> -->
				</view>
				<view class="address">{{item.address}}</view>
				<view class="time">
					<view class="time-fl">{{item.time}}</view>
					<view class="time-fr">
						<view class="view-pl"  @tap="pl(index,item)"><image src="~@/static/images/other/pl01.png" mode="">{{item.commentNum}}</image></view>
						<view class="dz" @click="cancle(index,item)">
							<view class="dianzan" v-if="item.show">
								<text></text>
								{{item.praiseNum}}
							</view>
							<view class="dianzan-no" v-else>
								<text></text>
								{{item.praiseNum}}
							</view>
						</view>
					</view>
				</view>
				<view class="comment" v-if="item.comments.length > 0">
					<view class="comment-item" v-for="comment in item.comments">
						<image :src="comment.commentUserImg" mode="" class="pic"></image>
						<view class="comment-content">
							<h2>{{comment.commentContent}}</h2>
							<!-- <text>{{17673}}参与</text> -->
						</view>
						<view class="jr">{{comment.commentCreateDate}}</view>
					</view>
					<view v-if="item.moreShow" class="more" @tap="commentMore">更多消息</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="poup">
				<h2>评论</h2>
				<view class="viewPanduan">
					<view class="Viewother">
						<textarea v-model="comment.content" placeholder-style="color:#999" placeholder="评论内容" />
						<view class="sc-pictier" @tap="addDiscusse">提交</view>
					</view>
				</view>
				<view class="close" @click="close"><image src="~@/static/images/other/sd.png" mode="" ></image>	</view>
			</view>
		</uni-popup>
		<footerSocial/>
		<view class="fb">
			<image src="~@/static/images/other/fb.png" mode="" class="pic" @tap="publish"></image>
		</view>
		
	</view>
</template>

<script>
import footerSocial from '../../components/footer/footer.vue'
import {getTendencyList,zan,pl} from '../../common/api/tendency.js'
import {getUserGroup} from '../../common/api/group.js'
import {getAge,getConstellation} from "../../common/api/index.js"
var user;

export default {
	data() {
		return {
			// show:true,
			array: ['杭州市', '苏州市', '南京市', '上海市区'],
			index: 0,
			groups:[],
			news:[
			],
			zan:{
				userId:"",
				tendencyId:"",
				status:""
			},
			comment:{
				userId:"",
				tendencyId:"",
				status:"",
				content:""
			},
			query:{
				groupUnid: ""
			}
		};
	},
	components: {
		footerSocial
	},
	methods: {
		cancle(index,row){
			this.zan.userId = user.unid
			this.zan.tendencyId = row.unid
			this.zan.status = this.news[index].show === true ? "1" : "0"
			zan(this.zan).then(res => {
				if(res[1].data.resultCode == "true"){
					if(this.news[index].show){
						this.news[index].praiseNum = this.news[index].praiseNum - 1;
					}else{
						this.news[index].praiseNum = this.news[index].praiseNum + 1;
					}
					this.news[index].show=!this.news[index].show;
					this.zan.userId = ""
					this.zan.tendencyId = ""
					this.zan.status = ""
				}else{
					uni.showToast({
						image: '/static/images/other/close.png',
						title: '提交失败',
						duration: 2000
					});
				}
			})
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index = e.target.value
		},
		publish(){
			uni.navigateTo({
				url: '../upload/upload'
			})
		},
		moreGroup(){
			uni.navigateTo({
				url: '../interest/interest'
			})
		},
		// getLocation(){
		// 	uni.getLocation({
		// 		type: 'wgs84',
		// 		geocode: true,
		// 		success: function (res) {
		// 			console.log('当前位置的经度：' + res.longitude);
		// 			console.log('当前位置的纬度：' + res.latitude);
		// 		}
		// 	});
		// },
		getData(){
			this.news = [];
			getUserGroup().then(res => {
				let groups = JSON.parse(decodeURIComponent(res[1].data.resultData));
				for(let i=0; groups.length > i; i++){
					this.groups.push({'unid':groups[i].unid,'name':groups[i].name});
				}
			});
			getTendencyList().then(res => {
				let tendencys = JSON.parse(decodeURIComponent(res[1].data.resultData));
				let m
				for(let i=0; i < tendencys.length; i++){
					// this.news.userImg = tendencys[i].user
					// this.news.unerName = tendencys[i].user.userName;
					// this.news.userAge = tendencys[i].user.birthday == undefined ? "未知" : getAge(tendencys[i].user.birthday);
					// this.news.userConstellation = tendencys[i].user.birthday == undefined ? "未知" : getConstellation(tendencys[i].user.birthday);
					// this.news.title = tendencys[i].contrnt;
					let commen = [];
					if(tendencys[i].discusses.length>0){
						m = tendencys[i].discusses.length>=2?2:tendencys[i].discusses.length;
						for(let j=0; j<m; j++){
							commen.push({
								"commentUserImg":tendencys[i].discusses[j].user.userPhotos[0] == undefined ? '' : tendencys[i].discusses[j].user.userPhotos[0].attaPath,
								"commentContent":tendencys[i].discusses[j].content,
								"commentCreateDate":tendencys[i].discusses[j].createDate
							})
						}
					}
					this.news.push({
						"unid":tendencys[i].unid,
						"userImg":tendencys[i].user.userPhotos[0] == undefined ? '' : tendencys[i].user.userPhotos[0].attaPath,
						"userName":tendencys[i].user.userName,
						"userAge":tendencys[i].user.birthday == undefined ? "未知" : getAge(tendencys[i].user.birthday),
						"userConstellation":tendencys[i].user.birthday == undefined ? "未知" : getConstellation(tendencys[i].user.birthday),
						"title":tendencys[i].content,
						"address":"",
						"time":"",
						"moreShow":tendencys[i].discusses.length>2?true:false,
						"commentNum":tendencys[i].discusses.length,
						"praiseNum":tendencys[i].tendencyUserZans.length,
						"show": tendencys[i].tendencyUserZan != undefined ? true : false,
						"comments":commen,
						"attas":tendencys[i].attas
					})
				}
			});
		},
		changeGroup(unid){
			if(unid === 'all'){
				this.query.groupUnid = null;
			}else{
				this.query.groupUnid = unid;
			}
			console.log(this.query)
		},
		pl(index,item){
			this.$refs.popup.open('center');
			this.comment.userId = user.unid;
			this.comment.tendencyId = item.unid;
		},
		close(){
			this.comment.userId = "";
			this.comment.tendencyId = "";
			this.comment.content = "";
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.close('center');
		},
		addDiscusse(){
			pl(this.comment).then(res => {
				this.getData();
				this.close();
			})
		},
		commentMore(){
			
		},
		updateUserGroup(){
			this.groups = [];
			getUserGroup().then(res => {
				let groups = JSON.parse(decodeURIComponent(res[1].data.resultData));
				for(let i=0; groups.length > i; i++){
					this.groups.push({'unid':groups[i].unid,'name':groups[i].name});
				}
			});
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
		// this.getLocation()
		this.getData()
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
.list-content{
	padding: 40rpx;
	border-bottom: 20rpx solid #F2F4F6;
}
.list-content:last-child{
	border-bottom: 20rpx solid #fff;
}
.list-content .item{
	display: flex;
	 /*设置容器内部容器的排列方向*/	
	flex-direction: row;
	flex-wrap:wrap;
}
.item image{
	width: 100rpx;
	height: 100rpx;
	margin-right: 20rpx;
	border-radius: 50%;
}
.item-content{
	padding-top: 10rpx;
	width: 420rpx;
}
.item-content h2{
	font-size: 28rpx;
	color:#1BBAE9;
	font-weight: 500;
	line-height: 40rpx;
	margin: 0;
	padding: 0;
}
.item-content text{
	font-size: 24rpx;
	color:#999;
}
.item-content text b{
	font-weight: normal;
	font-size: 24rpx;
	color:#999;
	margin-right: 25rpx;
}
.list-content h3{
	color: #333333;
	line-height: 28rpx;
	font-size: 28rpx;
	font-weight: normal;
	padding: 30rpx 0;
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
	padding-bottom: 190rpx;
}
.pic-photo image{
	width: 200rpx;
	height: 200rpx;
	margin-right: 20rpx;
}

.address{
	font-weight: 400;
	color: #1BBAE9;
	line-height: 34rpx;
	font-size: 24rpx;
	margin: 10rpx 0 20rpx;
}
.time{
	height: 40rpx;
	line-height: 40rpx;
	margin-bottom: 20rpx;
}
.time-fl{
	font-size: 24rpx;
	color:#999;
	float: left;
}
.time-fr{
	float: right;
}
.time-fr .view-pl{
	font-size:24rpx;
	display: inline-block;
}
.time-fr image{
	width: 30rpx;
	height: 30rpx;
	vertical-align: middle;
	margin-right: 15rpx;
	margin-top: -5rpx;
}
.dianzan,.dianzan-no{
	display: inline-block;
	font-size:24rpx
} 
.dianzan text,.dianzan-no text{
	width: 28rpx;
	height: 28rpx;
	display: inline-block;
	margin-right: 15rpx;
	margin-top: -4rpx;
	vertical-align: middle;
}
.dianzan text{
	background:url(~@/static/images/other/xin.png) no-repeat center;
	background-size: 100% 100%;
}
.dianzan-no text{
	background:url(~@/static/images/other/xin-no.png) no-repeat center;
	background-size: 100% 100%;
}
.dz{
	display: inline-block;
	margin-left:50rpx;
}
.comment{
	background-color: #F2F4F6;
	border-radius: 8rpx;
	padding: 25rpx;
}
.comment-item{
	border-bottom: 1rpx solid rgba(0,0,0,0.1);
	margin-bottom: 20rpx;
}
.comment-item image{
	width: 80rpx;
	height: 80rpx;
	margin-right: 20rpx;
	margin-bottom: 10rpx;
}
.comment-content{
	width: 380rpx;
	display: inline-block;
	vertical-align: top;
	padding-top: 8rpx;
}
.comment-content h2{
	font-size: 24rpx;
	color:#1BBAE9;
	font-weight: 500;
	margin: 0;
	padding: 0;
	line-height: 40rpx;
}
.comment-content text{
	font-size: 24rpx;
	color:#999;
	display: inline-block;
	vertical-align: top;
}
.jr{
	font-size: 22rpx;
	color: #999;
	display: inline-block;
	vertical-align: top;
	margin-top: 30rpx;
}
.more{
	text-align: center;
	font-size: 24rpx;
	color: #1BBAE9;
}
.fb{
	position: fixed;
	bottom: 190rpx;
	right: 50rpx;
}
.fb image{
	width: 116rpx;
	height: 116rpx;
}
.top{
	width: 80%;
	height: 88rpx;
	background: #FFFFFF;
	box-shadow: 0px -1rpx 0px 0px #DDDDDD;
	border-bottom: 1rpx solid rgba(221,221,221,0.5);
	line-height: 88rpx;
	box-sizing: border-box;
	padding: 0 30rpx;
}
.top .fl{
	width: 23%;
}
.top .fl>>>uni-picker{
	display: inline-block;
}
.top .fl .uni-input{
	font-size: 24rpx;
	color:#000
}
.top .fl image{
	width: 32rpx;
	height: 44rpx;
	vertical-align: middle;
	margin-right: 10rpx;
}
.top .fr image{
	width: 36rpx;
	height: 36rpx;
	vertical-align: middle;
}
.center{
	white-space: nowrap;
	width: 60%;
	margin:o auto;
	font-size: 28rpx;
	color:#666;
	float: left;
	text-align: center;
}
.center text{
	display: inline-block;
	padding:  0 15rpx;
	display: inline-block;
	line-height: 88rpx;
	position: relative;
}
.center text.on::after{
	display: inline-block;
}
.center text::after{
	content: "";
	width: 38rpx;
	height: 6rpx;
	background: #1BBAE9;
	border-radius: 3rpx;
	position: absolute;
	bottom: 0rpx;
	left:50%;
	margin-left: -19rpx;
	display: none;
}
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

