import axios from 'axios';

const IP = process.env.REACT_APP_IP;

export default axios.create({
	baseURL: `http://${IP}:8080/api`,
	headers: {
		"content-type": "application/json"
	}
});
