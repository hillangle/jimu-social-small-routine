<template>
	<view class="container">
		<uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
		<view class="list">
			<view class="item">
				<view class="fl">昵称</view>
				<view class="fr">阿林<image src="~@/static/images/other/next.png" alt=""></view>
			</view>
			<view class="item">
				<view class="fl">性别</view>
				<view class="fr">女<image src="~@/static/images/other/next.png" alt=""></view>
			</view>
			<view class="item">
				<view class="fl">出生日期</view>
				<view class="fr">1992-09-12<image src="~@/static/images/other/next.png" alt=""></view>
			</view>
			<view class="item">
				<view class="fl">签名内容</view>
				<view class="fr">我就是我<image src="~@/static/images/other/next.png" alt=""></view>
			</view>
		</view>
	</view>
</template>

<script>

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
