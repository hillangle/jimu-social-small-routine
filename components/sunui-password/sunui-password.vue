<template name='sunui-password'>
	<view>
		<text class="sunui-eye-iconfont" :class="showpass?'icon-yanjing-bi':'icon-yanjing-zheng'" @tap="showTap"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showpass:true
			};
		},
		name:'sunui-password',
		methods:{
			showTap(){
				this.showpass = !this.showpass;
				this.$emit('change',this.showpass);
			}
		}
	}
</script>

<style>
@font-face {font-family: "sunui-eye-iconfont";
	  src: url('//at.alicdn.com/t/iconfont.eot?t=1557740566630'); /* IE9 */
	  src: url('//at.alicdn.com/t/iconfont.eot?t=1557740566630#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPEAAsAAAAAB9gAAAN2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqDNIMGATYCJAMMCwgABCAFhG0HRBvaBsguoRzbUaQhzA7XPv/dnjJ/l2ylgTyAiIensdr7M7Oq7S6pRsH7JsQi3kg08QQhkjRkLZFQ8Hnt6jMHMQewgpmZnfHLZs+sQFT4aOFO6MAGkEG9n19LGP1wcVhvaptI44hUsU6G6tehytza1pA8CcWkVcTyStw3TA/gP5+4d9oUn8+yXOZY/qkLMA4ooLE2FVEBBcQtY5NhZE6s/A8TaJoXjDqr55UBA4U9KhD3BkwzMCiYlI7qUBeqDQuLeANV1NMr5BVeR9+P/4o6SSWzJ85upLeBpF/kj0UfglwNSJB4OgfEZWRsAApxvdF1kXaS2qCtqat0uouripCmioKJRIamutE/XiKq7Mo2WIF04hfpcQl+sWkJ17+MKup4is+UPn5TUSb0OhPb7ftpWrG2/fDGMUlmsgvrd/c3HeK4adruseVcKLcWDkynH3Y9trFXN7xPZY8zinr0nTkFHk5mZS+tHx/aypdj/aoNFDLTTmk6HQ+bcrRmn2WVb5PyxRWbUxNOXLj4TVzzKIbnt+eeZl6Xd6nAT19dD414SW/jnAdc7fLD3Xbj+SdDaevv/lY0fYeN7KPsnXiB5HG1n/GHQnJ2xMbcgX5Gt3/5ZDO2OfPnNwHpOPDLVze93VtHvXLbk+Ufl0836D3a6h6na777eDWxk9h5svgDfLis53ire5dGfvgRNQl/f6qtxe67ka23M+rukJo5hhHvy2FBlHXkiqI9zqRopzMKhJ5CK3KDJnYyf08g8HxDXv53v/HozzM/vN4q4Ae4NgVDgfNQfzJ38E+JkXXFkNrmXDSRJ7Lc2dlcQAIEktr/UwtD39g1E3QloW6SIamZQ1a3QC70DVS0HKCq7gSa1mUubxnBtEVpYM0YQei7RtL1DVnfa3Khf0XF1H9U9SOj6XyMNmxZitvYmSVqJqgNtnRBtlWWaNdKjOLqEsRohGacl0aMCoTVbBRGbO2Us5lIQniKKep2JpIQGtJYFmEGOQ4JggwVLHOolYSqCFESw7ZvNL0otFUWgZEzMKQZgbSBWnSBWK1kEjpoThhVPl8CYWgImuEOQp23AoKpse1DEUKFI8iZKglFuJVn1NoxIhEEDaJhMhGUQRyI4KRkkNLcj4O0IkKpGBKKRGG0EY1VhS6vEd9vCzTZJ+VIkaNoPmhIHCsxIS2saWrvVqHACAAAAA==') format('woff2'),
	  url('//at.alicdn.com/t/iconfont.woff?t=1557740566630') format('woff'),
	  url('//at.alicdn.com/t/iconfont.ttf?t=1557740566630') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('//at.alicdn.com/t/iconfont.svg?t=1557740566630#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.sunui-eye-iconfont {
	  font-family: "sunui-eye-iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  position: absolute;
	  right: 20rpx;
	  top: 25rpx;
	}
	
	.icon-yanjing-bi:before {
	  content: "\e61d";
	}
	
	.icon-yanjing-zheng:before {
	  content: "\e621";
	}
	
	
	.sunui-eye-iconfont {
		font-size: 50upx;
	}
</style>
