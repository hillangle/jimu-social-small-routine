<template>
	<view class="waterfall-flow" ref="waterfall">
		<!-- class="item" 必须有, 限制好 item 宽度  -->
		<view class="item" :style="item.style" v-for="(item, index) in newList" :key="item.key" :data-index="index" @click="choose">
			<!-- 盒子样式，自定义 -->
			<view class="box">
				<view class="pic"><image class="image" mode="widthFix" :src="item.image" style="width: 100%; display: block;"></image></view>
				<view class="content">{{ item.content }}</view>
				<view class="local">
					<text class="pos">{{ item.local.avatar }}</text>
					<text class="place">{{ item.local.name }}</text>
				</view>
				<view class="star" @tap="like">
					<view class="star-pic"></view>
					<text class="star-num">{{ item.num }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			newList: [], // 兼容小程序
			boxHeight: [],
			liked: false,
			current: 0,
			isClick: ''
		};
	},
	watch: {
		list: function(newVal, oldVal) {
			if (newVal != oldVal) {
				// #ifndef MP-WEIXIN
				this.newList = this.list;
				// #endif
				// #ifdef MP-WEIXIN
				this.newList = this.newList.concat(newVal);
				// #endif
				let mark = oldVal.length;
				let len = this.list.length;
				let screenWidth = uni.getSystemInfoSync().screenWidth;
				let style = '';
				this.$nextTick(async function() {
					const query = uni.createSelectorQuery().in(this);
					let dataArray = [];
					await new Promise((resolve, reject) => {
						setTimeout(() => {
							query
								.selectAll('.waterfall-flow .item')
								.fields({ size: true }, data => {
									dataArray = data;
									resolve();
								})
								.exec();
						}, 520); // 针对图片 mode="widthFix" 尺寸改变时的延迟
					});
					for (let i = mark; i < len; i++) {
						if (i < 2) {
							style = `top: 0; left: ${(screenWidth / 2) * i}px;`;
							this.boxHeight.push(dataArray[i].height);
						} else {
							let minHeight = this.boxHeight[0];
							if (minHeight > this.boxHeight[1]) {
								minHeight = this.boxHeight[1];
								this.boxHeight[1] = minHeight + dataArray[i].height;
								style = `top: ${minHeight}px; left: ${screenWidth / 2}px;`;
							} else {
								this.boxHeight[0] = minHeight + dataArray[i].height;
								style = `top: ${minHeight}px; left: 0;`;
							}
						}
						this.$set(this.newList[i], 'style', style);
						this.$forceUpdate();
					}
				});
			}
		}
	},
	methods: {
		// 选中
		choose(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('click', this.newList[index]);
		}
	}
};
</script>

<style scoped>
image {
	display: block;
	will-change: transform;
}
.waterfall-flow {
	position: relative;
	background-color: #f4f4f4;
}
/* 为了初始化，还为定位上，加上这个 */
.item {
	width: 375rpx;
	position: absolute;
	top: -375rpx;
	left: -375rpx;
}
.box {
	margin: 10rpx;
	background-color: #fff;
	border-radius: 10rpx;

	overflow: hidden;
}
.local {
	padding: 20rpx;
	line-height: 1;
}
.pos {
	display: inline-block;
	vertical-align: middle;
	font-size: 18rpx;
	color: #0771f0;
	border: 1px solid #0771f0;
	border-radius: 10rpx;
	padding: 4rpx 8rpx;
}
.place {
	font-size: 24rpx;
	padding-left: 10rpx;
	box-sizing: border-box;
	color: #999;
}
.content {
	font-size: 30rpx;
	padding: 20rpx;
	color: #333;
	border-bottom: 1px solid #ededed;
}
.star {
	text-align: right;
	padding: 0 20rpx 20rpx 0rpx;
}
.star text {
	display: inline-block;
	vertical-align: middle;
	color: #333;
	font-size: 26rpx;
}
.star-pic{
	display: inline-block;
	vertical-align: middle;	
}
.star-pic image{
	width: 22rpx;
	height: 22rpx;	
}
 .star-pic {
	background: url(../../static/images/clap/zan-pic.png) no-repeat center;
	width: 22rpx;
	height: 22rpx;
	background-size: cover;
	display: inline-block;
	vertical-align: middle;
	margin: 0 6rpx 0 0;
}
.star-active .star-pic {
	background: url(../../static/images/clap/zan-pic-active.png) no-repeat center;
	background-size: cover;
} 
</style>
