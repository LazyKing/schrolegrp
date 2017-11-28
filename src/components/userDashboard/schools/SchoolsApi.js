import axios from 'axios';
import {  browserHistory  } from 'react-router'

class SchoolsApi {

	static requestHeaders(auth_token,user_email) {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  	}

	static getSchoolList(user) {
			const baseUrl = global.devHost ;
			const getAllQualifiacationsUrl = baseUrl + '/schools';

	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: getAllQualifiacationsUrl,
	      headers: headers
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
	}

	static getCurrentSchoolDetails(user, schoolId) {
		const baseUrl = global.devHost ;
		const getCurrentSchoolDetailsUrl = baseUrl + `/schools/${schoolId}`;

		const {auth_token,user_email} = user;
		const headers = this.requestHeaders(auth_token,user_email);

		return axios({
			method: 'GET',
			url: getCurrentSchoolDetailsUrl,
			headers: headers
		}).then(function (response) {
			return (response.data)
		}).catch(function (error) {
			return error.response ;
		});
	}

}


export default SchoolsApi;
