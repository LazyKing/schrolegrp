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

		static logout( email, token ) {
			var baseUrl = global.devHost ;
			const logoutUrl = baseUrl + '/users/sign_out';
			var headers = this.requestHeaders();
			headers['X-API-TOKEN'] = token;
			headers['X-API-EMAIL'] = email;

			return axios({
				method: 'DELETE',
				url: logoutUrl,
				headers: headers
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
