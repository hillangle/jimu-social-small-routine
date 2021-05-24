import app from '../app.js'

export const getTendencyList = query => {
	return uni.request({
		url: 'app/tendency/getTendencyList',
		method: "POST",
		data: query
	})
}

export const addTendency = query => {
	return uni.request({
		url: 'app/tendency/addTendency',
		method: "POST",
		data: query
	})
}

export const zan = query => {
	return uni.request({
		url: 'app/tendency/zan',
		method: "POST",
		data: query
	})
}

export const pl = query => {
	return uni.request({
		url: 'app/tendency/pl',
		method: "POST",
		data: query
	})
}