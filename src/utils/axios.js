import axios from 'axios';

export const Axios = () => {
	return axios.create({
		headers: {
			'Content-Type': 'application/json'
		},
	});
};

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
		},
	});
};