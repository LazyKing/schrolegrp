import axios from 'axios';
import {  browserHistory  } from 'react-router'

class ExperiencesApi { 

  static requestHeaders(auth_token,user_email) {
    return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		}
  	}

	static getAllExperiencesDetails(user) {
	  	//console.log(user)
	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: 'http://13.126.41.88/applicants/experiences',
	      headers: headers
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

   	static createNewExperience( user, newExperience) {
	    //console.log(user)
	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);
	    return axios({
	      method: 'POST',
	      url: 'http://13.126.41.88/applicants/experiences',
	      headers: headers,
	      data: JSON.stringify({'data': newExperience})
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

  	static updateExperience( user, experienceUpdate, experiencenId) {
	    //console.log(experienceUpdate)
	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);
	    return axios({
	      method: 'PUT',
	      url: `http://13.126.41.88/applicants/experiences/${experiencenId}`,
	      headers: headers,
	      data: JSON.stringify({'data': experienceUpdate})
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

}

export default ExperiencesApi;