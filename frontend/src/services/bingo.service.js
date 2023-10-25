import http from '../http-common';

// This object will be initialised whenever we want to GET, POST, DELETE, PUT data
class BingoDataService {
	get(id){
		return http.get(`bingosheets/${id}`);
	}
	getAll(){
		return http.get("bingosheets/");
	}
	create(data){
		return http.post(`bingosheets/`, data);
	}
	update(id, data){
		return http.put(`bingosheets/${id}`,  data);
	}
	delete(id, keyword){
		return http.delete(`bingosheets/${id}`, keyword);
	}
	deleteAll(keyword){
		return http.delete(`bingosheets/all/${keyword}`);
	}
	findByTitle(title){
		return http.get("bingosheets/", title);
	}
}

export default new BingoDataService();
