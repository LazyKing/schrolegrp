import axios from 'axios';
import {  browserHistory  } from 'react-router'

class AunthenticationAndRegistrationApi {
	  
	static requestHeaders() {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
  	}

  	static registerApplicant(user) {
	  	//console.log(user)
	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders();
	    return axios({
	      method: 'POST',
	      url: 'http://35.154.148.146/users.json',
	      headers: headers,
	      body: JSON.stringify({'user': user})
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ; 
	    });
  	}

}

export default AunthenticationAndRegistrationApi;