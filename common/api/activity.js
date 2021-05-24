import app from '../app.js'

export const getActivityList = query => {
	return uni.request({
		url: 'app/activity/getActivityList',
		method: "POST",
		data: query
	})
}