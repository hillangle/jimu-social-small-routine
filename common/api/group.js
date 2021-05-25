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

export const addGroup = query => {
	return uni.request({
		url: 'app/group/addGroup',
		method: "POST",
		data: query
	})
}

export const outGroup = query => {
	return uni.request({
		url: 'app/group/outGroup',
		method: "POST",
		data: query
	})
}
