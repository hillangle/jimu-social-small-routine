import app from '../app.js'

export const getUserInfo = query => {
	return uni.request({
		url: 'app/index/getUserInfo',
		method: "POST",
		data: query
	})
}

export const editUserInfo = query => {
	return uni.request({
		url: 'app/index/editUserInfo',
		method: "POST",
		data: query
	})
}

export const addUserSocial = query => {
	return uni.request({
		url: 'app/index/addUserSocial',
		method: "POST",
		data: query
	})
}

export const editUserSocial = query => {
	return uni.request({
		url: 'app/index/editUserSocial',
		method: "POST",
		data: query
	})
}

export const getAllSocial = query => {
	return uni.request({
		url: 'app/index/getAllSocial',
		method: "POST",
		data: query
	})
}

export const getUserSocial = query => {
	return uni.request({
		url: 'app/index/getUserSocial',
		method: "POST",
		data: query
	})
}

export const getAge = strBirthday => {
	//strBirthday传入格式 2020-04-15
	var returnAge;
	var strBirthdayArr = strBirthday.split('-');
	var birthYear = strBirthdayArr[0];
	var birthMonth = strBirthdayArr[1];
	var birthDay = strBirthdayArr[2];
	//获取当前日期
	var d = new Date();
	var nowYear = d.getFullYear();
	var nowMonth = d.getMonth() + 1;
	var nowDay = d.getDate();
	if (nowYear == birthYear) {
		returnAge = 0; //同年 则为0岁
	} else {
		var ageDiff = nowYear - birthYear; //年之差
		if (ageDiff > 0) {
			if (nowMonth == birthMonth) {
				var dayDiff = nowDay - birthDay; //日之差
				if (dayDiff < 0) {
					returnAge = ageDiff - 1;
				} else {
					returnAge = ageDiff;
				}
			} else {
				var monthDiff = nowMonth - birthMonth; //月之差
				if (monthDiff < 0) {
					returnAge = ageDiff - 1;
				} else {
					returnAge = ageDiff;
				}
			}
		} else {
			returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
		}
	}
	return returnAge; //返回周岁年龄
}

export const getConstellation = strBirthday => {
	//strBirthday传入格式 2020-04-15
	var returnAge;
	var strBirthdayArr = strBirthday.split('-');
	var birthYear = strBirthdayArr[0];
	var birthMonth = strBirthdayArr[1];
	var birthDay = strBirthdayArr[2];
	if(birthMonth == 1){
		if(birthDay >= 20 && birthDay <= 31){
			return '水瓶座';
		}
	}
	if(birthMonth == 2){
		if(birthDay >= 1 && birthDay <= 18){
			return '水瓶座';
		}
	}
	if(birthMonth == 2){
		if(birthDay >= 19 && birthDay <= 31){
			return '双鱼座';
		}
	}
	if(birthMonth == 3){
		if(birthDay >=1 && birthDay <= 20){
			return '双鱼座';
		}
	}
	if(birthMonth == 3){
		if(birthDay >= 21 && birthDay <= 31){
			return '白羊座';
	    }
	}
	if(birthMonth == 4){
		if(birthDay >= 1 && birthDay <= 19){
			return '白羊座';
		}
	}
	if(birthMonth == 4){
		if(birthDay >= 20 && birthDay <= 31){
			return '金牛座';
		}
	}
	if(birthMonth == 5){
		if(birthDay >= 1 && birthDay <= 20){
			return '金牛座';
		}
	}
	if(birthMonth == 5){
		if(birthDay >= 21 && birthDay <=31){
			return '双子座';
		}
	}
	if(birthMonth == 6){
		if(birthDay >= 1 && birthDay <= 21){
			return '双子座';
		}
	}
	if(birthMonth == 6){
		if(birthDay >= 22 && birthDay <= 31){
			return '巨蟹座';
		}
	}
	if(birthMonth == 7){
		if(birthDay >= 1 && birthDay <= 22){
			return '巨蟹座';
		}
	}
	        //狮子座7.23-8.22
	if(birthMonth == 7){
		if(birthDay >= 23 && birthDay <= 31){
			return '狮子座';
		}
	}
	if(birthMonth == 8){
		if(birthDay >= 1 && birthDay <= 22){
			return '狮子座';
		}
	}
	if(birthMonth == 8){
		if(birthDay >= 23 && birthDay <= 31){
			return '处女座';
		}
	}
	if(birthMonth == 9){
		if(birthDay >= 1&& birthDay <= 22){
			return '处女座';
		}
	}
	if(birthMonth == 9){
		if(birthDay >= 23 && birthDay <= 31){
			return '天枰座';
		}
	}
	if(birthMonth == 10){
		if(birthDay >= 1 && birthDay <= 23){
			return '天枰座';
		}
	}
	if(birthMonth == 10){
		if(birthDay >= 24 && birthDay <= 31){
			return '天蝎座';
		}
	}
	if(birthMonth == 11){
		if(birthDay >= 1 && birthDay <= 22){
			return '天蝎座';
		}
	}
	if(birthMonth == 11){
		if(birthDay >= 23 && birthDay <= 31){
			return '射手座';
		}
	}
	if(birthMonth == 12){
		if(birthDay >= 1 && birthDay <= 21){
			return '射手座';
		}
	}
	if(birthMonth == 12){
		if(birthDay >= 22 && birthDay <= 31){
			return '摩羯座';
		}
	}
	if(birthMonth == 1){
		if(birthDay >= 1 && birthDay <= 19){
			return '摩羯座';
		}
	}
}
