<template>
	<view class="container">
		<view class="top">
			<view class="fl">
				<image src="~@/static/images/other/position.png" mode="" class="pic"></image>
				 <picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<view class="center">
				<text class="on">全部</text>
				<text>娱乐</text>
				<text>酒吧</text>
				<text>风景</text>
				<text>美食</text>
			</view>
			<view class="fr"><image src="~@/static/images/other/more.png" mode="" class="pic"></image></view>
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
				<view class="comment">
					<view class="comment-item">
						<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
						<view class="comment-content">
							<h2>#不怕黑大作战#</h2>
							<text>17673参与</text>
						</view>
						<view class="jr">上午10：50</view>
					</view>
					<view class="comment-item">
						<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
						<view class="comment-content">
							<h2>#不怕黑大作战#</h2>
							<text>17673参与</text>
						</view>
						<view class="jr">上午10：50</view>
					</view>
					<view class="comment-item">
						<image src="~@/static/images/other/interest01.png" mode="" class="pic"></image>
						<view class="comment-content">
							<h2>#不怕黑大作战#</h2>
							<text>17673参与</text>
						</view>
						<view class="jr">上午10：50</view>
					</view>
					<view class="more">更多消息</view>
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
		<view class="fb">
			<image src="~@/static/images/other/fb.png" mode="" class="pic"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show:true,
			array: ['杭州市', '苏州市', '南京市', '上海市区'],
			 index: 0
		};
	},
	components: {
		
	},
	methods: {
		cancle(){
			this.show=!this.show
		},
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index = e.target.value
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
.footer{
	width: 750rpx;
	height: 190rpx;
	position: fixed;
	left:0;
	bottom: 0;
	box-sizing: border-box;
	background-color: #fff;
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
	width: 100%;
	height: 88rpx;
	background: #FFFFFF;
	box-shadow: 0px -1rpx 0px 0px #DDDDDD;
	border-bottom: 1rpx solid rgba(221,221,221,0.5);
	line-height: 88rpx;
	box-sizing: border-box;
	padding: 0 30rpx;
}
.top .fl{
	width: 20%;
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
	width: 70%;
	margin:o auto;
	font-size: 28rpx;
	color:#666;
	float: left;
	text-align: center;
}
.center text{
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
</style>

