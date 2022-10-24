import axios from 'axios';
export default axios.create({
	baseURL: process.env.REACT_APP_URL
});

export const axiosPrivate = axios.create({
	baseURL: process.env.REACT_APP_URL,
	headers: { ContentType: 'application/json' },
	withCredentials: true
});

export const BaseURL = process.env.REACT_APP_URL;