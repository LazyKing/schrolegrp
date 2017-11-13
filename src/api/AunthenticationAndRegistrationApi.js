import axios from 'axios';
import {  browserHistory  } from 'react-router'

class AunthenticationAndRegistrationApi {

	static requestHeaders() {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
  }

  	static registerApplicant( userAuthentication ) {
	  	//const {auth_token,user_email} = user
	    const headers = this.requestHeaders();
	    return axios({
	      method: 'POST',
	      url: 'http://13.126.41.88/users.json',
	      headers: headers,
	      data: JSON.stringify({
	      	'user': userAuthentication
	      })
	    }).then(function (response) {
	      return (response)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

}

export default AunthenticationAndRegistrationApi;
