import axios from 'axios';
// const DEV_URL = 'http://localhost:5001/ihs-project/us-central1/ihsApiv1';
const PROD_URL = 'https://us-central1-ihs-project.cloudfunctions.net/ihsApiv1';
export default axios.create({
	baseURL: PROD_URL
});

export const axiosPrivate = axios.create({
	baseURL: PROD_URL,
	headers: { ContentType: 'application/json' },
	withCredentials: true
});

export const BaseURL = PROD_URL;