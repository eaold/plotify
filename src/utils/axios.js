import axios from 'axios';

export const Axios = () => {
	return axios.create({
		headers: {
			'Content-Type': 'application/json'
		},
		baseURL: process.env.REACT_APP_BACKEND_URL
	});
};

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))[0] || ''}`
		},
		baseURL: process.env.REACT_APP_BACKEND_URL
	});
};