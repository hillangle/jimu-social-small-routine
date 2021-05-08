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
		<view class="poup-content">
			<view class="poup-list">
				<view class="poup-item" @click="open">
					<image src="~@/static/images/other/tb01.png" mode=""></image>
					微信
					<image src="~@/static/images/other/sc.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb02.png" mode=""></image>
					抖音
					<image src="~@/static/images/other/sc.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb03.png" mode=""></image>
					微博
					<image src="~@/static/images/other/sc.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb04.png" mode=""></image>
					快手
					<image src="~@/static/images/other/sc.png" mode="" class="gn"></image>	
				</view>
			</view>
			<view class="poup-list">
				<view class="poup-item"  @click="openOther">
					<image src="~@/static/images/other/tb05.png" mode=""></image>
					Twitter
					<image src="~@/static/images/other/tj.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb06.png" mode=""></image>
					Fcaebook
					<image src="~@/static/images/other/tj.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb07.png" mode=""></image>
					QQ
					<image src="~@/static/images/other/tj.png" mode="" class="gn"></image>	
				</view>
				<view class="poup-item">
					<image src="~@/static/images/other/tb08.png" mode=""></image>
					Instagram
					<image src="~@/static/images/other/tj.png" mode="" class="gn"></image>	
				</view>
			</view>
		</view>
		<!-- 弹层 -->
		<uni-popup ref="popup" type="center">
			<view class="poup">
				<image src="~@/static/images/other/tips.png" mode="" ></image>	
				<h2>信息提示</h2>
				<view class="viewPanduan">
					<view class="Viewother" v-if="inputShow">
						<text>需将社交账号的二维码图片保存本地，再点击上传</text>
					</view>
					<view class="ViewAnother" v-else>
						<text class="textCenter">需输入对应的链接，再点击上传</text>
						<input class="uni-input" placeholder-style="color:#999" placeholder="链接：" />
					</view>
				</view>
				<view class="sc-pictier">上传照片</view>
				<view class="close" @click="close"><image src="~@/static/images/other/sd.png" mode="" ></image>	</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputShow:false,
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
		open(){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.open('center')
		},
		close(){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			this.$refs.popup.close('center')
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
.poup-content{
	width: 100%;
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
