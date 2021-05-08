<template>
	<view class="container">
		<view class="logo"><image src="~@/static/images/other/logo.png" mode=""></image></view>
		<view class="tips"><image src="~@/static/images/other/photo.png" mode=""></image>手机号码</view>
		<view class="uni-content">
			<view class="uni-form-item">
				<view class="title">+86<image src="~@/static/images/other/sj.png" mode=""></image></view>
				<input class="uni-input"  placeholder="18767589032" />
				<view class="colse"><image src="~@/static/images/other/close.png" mode=""></image></view>
			</view>
			<view class="uni-form-item">
				<view class="title">验证码</view>
				<input class="uni-input"  placeholder="" />
				<view class="colse">点击获取</view>
			</view>
			<view class="uni-form-item">
				<view class="title">激活码</view>
				<input class="uni-input"  placeholder="" />
				
			</view>
		</view>
		<label class="radio">
			<checkbox value="cb" checked="true" />
			登录注册即表示同意<text>极目协议</text>和<text>隐私协议</text>
		</label>
		<button type="default" class="bd-button">确认绑定</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	components:{
	        
	},
	methods: {
		
	}
};
</script>

<style>
	.container{
		
		padding: 0 75rpx;
		box-sizing: border-box;
	}
	.logo{
		margin-top: 180rpx;
		text-align: center;
		margin-bottom: 90rpx;
	}
	.logo image{
		height: 294rpx;
		width: 249rpx;
	}
	.tips{
		font-size: 28rpx;
		color:#000;
	}
	.tips image{
		width: 25rpx;
		height: 35rpx;
		vertical-align: middle;
		margin-right: 12rpx;
	}
	.uni-form-item{
		display: flex;
		 /*设置容器内部容器的排列方向*/	
		flex-direction: row;
		flex-wrap:wrap;
		border-bottom: 1rpx solid #DBDBDB;
		padding: 34rpx 0;
	}
	.title{
		font-size: 28rpx;
		color:#333;
		width: 120rpx;
		text-align: right;
		margin-right: 30rpx;
	}
	.title image{
		width: 20rpx;
		height: 10rpx;
		vertical-align: middle;
		margin-left: 15rpx;
		margin-top: -5rpx;
	}
	.uni-input{
		width: 300rpx;
		font-size: 28rpx;
	}
	.colse{
		width: 150rpx;
		text-align: right;
		color: #1BBAE9;
		font-size: 28rpx;
	}
	.colse image{
		width: 32rpx;
		height: 32rpx;
	}
	.uni-content{
		margin-bottom: 25rpx;
	}
	.radio{
		font-size: 24rpx;
		color:#999;
		
	}
	.radio text{
		color:#1BBAE9
	}
	.container>>>uni-checkbox .uni-checkbox-input{
		width: 36rpx;
		height: 36rpx;
		border-radius: 50%;
		margin-top: -5rpx;
	}
	.container>>>uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before{
		font-size: 32rpx;
	}
	.bd-button{
		width: 300rpx;
		height: 98rpx;
		background: #1BBAE9;
		border-radius: 49rpx;
		font-weight: 500;
		color: #FFFFFF;
		font-size: 32rpx;
		line-height: 98rpx;
		margin-top: 106rpx;
	}
</style>
