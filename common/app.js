//export var baseUrl = "http://47.111.173.172:8001/";
export var baseUrl = "http://127.0.0.1:8001/";

uni.addInterceptor('request', {
	invoke(args){
		if(args.url.indexOf("auth/register") == -1){
			if(!uni.getStorageSync("token")){
				console.log("无token，未登录");
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}else{
				if(args.url.indexOf("bspapp.com") == -1){
					args.header = {
						'Authorization' : "Bearer " + uni.getStorageSync("token"),
						'Content-Type' : "application/json"
					};
				}
			}
		}
		if(args.url.indexOf("http") == -1){
			args.url = baseUrl + args.url;
		}
		args.dataType = "json";
	}
});
