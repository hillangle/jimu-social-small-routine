import app from '../app.js'
export const appLogin = query => {
	return uni.request({
		url: 'auth/register',
		method: "POST",
		data: query
	})
}