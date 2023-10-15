import axios from 'axios';

export default axios.create({
	baseURL: "http://78.47.143.69:8080/api",
	headers: {
		"content-type": "application/json"
	}
});
