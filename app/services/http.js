import {serverUrl} from '../config/config';

const header = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const httpService = {

	postlogin(url, data){
		return fetch(serverUrl + url, {
		  method: 'POST',
		  headers: header,
		  body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			return data;
		})
		.catch(error => {
        console.log("error", error)
	    });
	},

	post(url, data){
		return fetch(serverUrl + url, {
		  method: 'POST',
			headers: header,
		  body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			return data;
		})
		.catch(error => {
	      console.error("errrrrr",error);
	    });
	},

	get(url){
		 return fetch(serverUrl + url , {
		  method: 'GET',
		  headers: header
		})
	    .then(response =>response.json())
	    .then(resJson => {
	    	if(resJson){
	    		return resJson;
	    	}
	    })
	    .catch(error => {
				return error;
	    });
	},

	delete(url){
		return fetch(serverUrl + url , {
		  method: 'DELETE',
		  headers: header
		})
	    .then(response => response.json())
	    .then(resJson => {
	    	if(resJson){
	    		return resJson;
	    	}
	    })
	    .catch(error => {
				props.dispatch(hide());
	      console.error("errrrrr",error);
	    });
	},
	put(url, data){
		return fetch(serverUrl + url , {
		  method: 'PUT',
		  headers: header,
		  body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			return data;
		})
		.catch(error => {
	      console.error("errrrrr",error);
	    });
	},

}

export default httpService;
