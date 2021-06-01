import app from '../app.js'

export const appLogin = query => {
	return uni.request({
		url: 'auth/register',
		method: "POST",
		data: query
	})
}

export const getSmsCode = query => {
	return uni.request({
		url: 'app/index/getSmsCode',
		method: "GET",
		data: query
	})
}