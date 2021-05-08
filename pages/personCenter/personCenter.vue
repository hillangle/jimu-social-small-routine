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
			<view class="list-content">
				<view class="item">
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
					<view class="item-content">
						<h2>Rhoda Miller</h2>
						<text><b>18岁</b><b>巨蟹座</b></text>
					</view>
				</view>
				<h3>今天天气很好，很适合拍照呢～</h3>
				<view class="pic-photo">
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
				</view>
				<view class="address">拱墅区</view>
				<view class="time">
					<view class="time-fl">8秒以前</view>
					<view class="time-fr">
						<view class="view-pl"><image src="~@/static/images/other/pl01.png" mode="">26</image></view>
						<view class="dz" @click="cancle">
							<view class="dianzan" v-if="show">
								<text></text>
								123
							</view>
							<view class="dianzan-no" v-else>
								<text></text>
								123
							</view>
						</view>
					</view>
				</view>
			
			</view>
			<view class="list-content">
				<view class="item">
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
					<view class="item-content">
						<h2>Rhoda Miller</h2>
						<text><b>18岁</b><b>巨蟹座</b></text>
					</view>
				</view>
				<h3>今天天气很好，很适合拍照呢～</h3>
				<view class="pic-photo">
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
					<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
				</view>
				<view class="address">拱墅区</view>
				<view class="time">
					<view class="time-fl">8秒以前</view>
					<view class="time-fr">
						<view class="view-pl"><image src="~@/static/images/other/pl01.png" mode="">26</image></view>
						<view class="dz" @click="cancle">
							<view class="dianzan" v-if="show">
								<text></text>
								123
							</view>
							<view class="dianzan-no" v-else>
								<text></text>
								123
							</view>
						</view>
					</view>
				</view>
			
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show:true
		};
	},
	components: {
		
	},
	methods: {
		cancle(){
			this.show=!this.show
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
.list-content{
	padding:30rpx 40rpx 20rpx;
	border-bottom: 20rpx solid #F2F4F6;
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
.comment-item image{
	width: 80rpx;
	height: 80rpx;
	margin-right: 20rpx;
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

</style>
