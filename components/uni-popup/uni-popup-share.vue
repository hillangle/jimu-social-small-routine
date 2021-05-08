<template>
	<view class="uni-popup-share">
		<view class="uni-share-title">
			<text class="uni-share-title-text">{{ title }}</text>
		</view>
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<view class="uni-share-content-item" v-for="(item, index) in bottomData" :key="index" @click.stop="select(item, index)">
					<image class="uni-share-image" :src="item.icon" mode="aspectFill"></image>
					<text class="uni-share-text">{{ item.text }}</text>
				</view>
			</view>
		</view>
		<view class="uni-share-button-box"><view @click="close">取消</view></view>
	</view>
</template>

<script>
export default {
	name: 'UniPopupShare',
	props: {
		title: {
			type: String,
			default: '指纹登录'
		}
	},
	inject: ['popup'],
	data() {
		return {
			bottomData: [
				{
					icon: '../../../static/images/loginRegister/header-touch.png',
					text: '请触摸指纹传感器'
				}
				// {
				// 	icon: '../../../static/images/loginRegister/wfsb-icon.png',
				// 	text: '无法识别'
				// }
			]
		};
	},
	created() {},
	methods: {
		/**
		 * 选择内容
		 */
		select(item, index) {
			this.$emit(
				'select',
				{
					item,
					index
				},
				() => {
					this.popup.close();
				}
			);
		},
		/**
		 * 关闭窗口
		 */
		close() {
			this.popup.close();
		}
	}
};
</script>
<style lang="scss" scoped>
.uni-popup-share {
	background-color: #fff;
	margin: 10px;
	border-radius: 10px;
}
.uni-share-title {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: left;
	height: 40px;
	padding-left: 20px;
	font-size: 16px;
	color: #000;
}
.uni-share-title-text {
	font-size: 16px;
	color: #333;
}
.uni-share-content {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	padding-top: 10px;
}

.uni-share-content-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	flex-wrap: wrap;
	width: 360px;
}

.uni-share-content-item {
	width: 100%;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: center;
	padding: 10px 0;
	align-items: center;
}

.uni-share-content-item:active {
	background-color: #f5f5f5;
}

.uni-share-image {
	width: 30px;
	height: 30px;
}

.uni-share-text {
	margin-top: 10px;
	font-size: 14px;
	color: #0262e5;
}
.uni-share-content-item:nth-of-type(2) .uni-share-text{
	color: #d93931;
}

.uni-share-button-box {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	padding: 10px 20px;
	font-size: 14px;
	color: #333333;
}

.uni-share-button {
	flex: 1;
	border-radius: 50px;
	color: #666;
	font-size: 14px;
}

.uni-share-button::after {
	border-radius: 50px;
}
</style>
