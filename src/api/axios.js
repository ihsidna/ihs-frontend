import axios from 'axios';

export default axios.create({
	baseURL: "https://us-central1-company-web-projects.cloudfunctions.net/ihsApiv1"
});