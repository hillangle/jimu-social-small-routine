import app from '../app.js'

export const getAllGroup = query => {
	return uni.request({
		url: 'app/group/getAllGroup',
		method: "POST",
		data: query
	})
}

export const getUserGroup = query => {
	return uni.request({
		url: 'app/index/getUserGroup',
		method: "POST",
		data: query
	})
}