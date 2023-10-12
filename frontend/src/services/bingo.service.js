import http from '../http-common';

class TutorialDataService {
	get(id){
		return http.get(`bingos/${id}`);
	}
	create(data){
		return http.post(`bingos/`, data);
	}
	update(id, data){
		return http.put(`bingos/${id}`,  data);
	}
	delete(id){
		return http.delete(`bingos/${id}`);
	}
	deleteAll(){
		return http.delete("bingos/");
	}
	findByTitle(title){
		return http.get("bingos/", title);
	}

}

