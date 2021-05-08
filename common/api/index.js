import {baseUrl} from '../app.js'

export const getUserInfo = query => {
	return uni.request({
		url: baseUrl + 'getUserInfo',
		method: "POST",
		header: {
			"Authorization": "Bearer " + localStorage.getItem("token");
			}
	})
}