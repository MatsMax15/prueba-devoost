import { getData } from './config.js'

export const getClients = async () => {
	const res = await getData.get(`/clients`)
	return res.data
}
