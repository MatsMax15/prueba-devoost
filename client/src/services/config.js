import axios from 'axios'

export const getData = axios.create({
	baseURL: 'http://0.0.0.0/api/v1/',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const postData = axios.create({
	baseURL: 'http://0.0.0.0/api/v1/',
})
