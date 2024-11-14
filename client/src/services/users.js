import { getData } from './config'

export const getUsers = async () => {
	const res = await getData.get(`/users`)
	return res.data
}
