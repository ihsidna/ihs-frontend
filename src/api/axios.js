import axios from 'axios';
// const DEV_URL = 'http://localhost:5001/ihs-project/us-central1/ihsApiv1';
const PROD_URL = 'https://api.ihsmdinc.com';
export default axios.create({
	baseURL: PROD_URL
});

export const axiosPrivate = axios.create({
	baseURL: PROD_URL,
	headers: { ContentType: 'application/json' },
	withCredentials: true
});

export const BaseURL = PROD_URL;