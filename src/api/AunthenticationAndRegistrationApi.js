import axios from 'axios';
import {  browserHistory  } from 'react-router'

class AunthenticationAndRegistrationApi {

		static requestHeaders() {
	    	return {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			}
	  }

		static applicantLogin( email, password ) {
			var baseUrl = global.devHost ;
			const signInUrl = baseUrl + '/users/sign_in';
			const headers = this.requestHeaders();

			return axios({
				method: 'POST',
				url: signInUrl,
				headers: headers,
				data: JSON.stringify({
					"user":{
						"email":email,
						"password":password
					}
				})
			}).then(function (response) {
				return response;
			}).catch(function (error) {
				return error.response ;
			});
		}

  	static registerApplicant( userAuthentication ) {
			const baseUrl = global.devHost ;
	  	const registerApplicantUrl = baseUrl + '/users.json';
	    const headers = this.requestHeaders();
	    return axios({
	      method: 'POST',
	      url: registerApplicantUrl,
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
