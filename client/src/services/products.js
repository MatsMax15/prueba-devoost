import { getData } from './config.js'

export const getProducts = async () => {
	const res = await getData.get(`/products`)
	return res.data
}
