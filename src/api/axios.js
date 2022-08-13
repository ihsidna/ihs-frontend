import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:5001/company-web-projects/us-central1/ihsApiv1'
});

export const BaseURL = 'http://localhost:5001/company-web-projects/us-central1/ihsApiv1';