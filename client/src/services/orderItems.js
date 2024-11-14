import { getData } from './config'

export const getOrderItems = async ({ orderId }) => {
	const res = await getData.get(`/orders-items/${orderId}`)
	return res.data
}
