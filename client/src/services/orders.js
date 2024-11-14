import { getData, postData } from './config.js'

export const getOrders = async () => {
	const res = await getData.get(`/orders`)
	return res.data
}

export const getOrderById = async ({ id }) => {
	const res = await getData.get(`/orders/${id}`)
	return res.data
}

export const saveOrder = (data) => postData.post('/orders', data)
