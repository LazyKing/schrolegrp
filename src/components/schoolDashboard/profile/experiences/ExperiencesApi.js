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
      const baseUrl = global.devHost ;
      const getAllExperiencesUrl = baseUrl + '/applicants/experiences';

	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: getAllExperiencesUrl,
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
      const baseUrl = global.devHost ;
      const createNewExperienceUrl = baseUrl + '/applicants/experiences';

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);
	    return axios({
	      method: 'POST',
	      url: createNewExperienceUrl,
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
      const baseUrl = global.devHost ;
      const updateExperienceUrl = baseUrl + `/applicants/experiences/${experiencenId}`;

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);
	    return axios({
	      method: 'PUT',
	      url: updateExperienceUrl,
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

    static deleteExperience( user, experiencenId) {
      const baseUrl = global.devHost ;
      const deleteExperienceUrl = baseUrl + `/applicants/experiences/${experiencenId}`;
      const {auth_token,user_email} = user;
      const headers = this.requestHeaders(auth_token,user_email);

      return axios({
        method: 'DELETE',
        url: deleteExperienceUrl,
        headers: headers
      }).then(function (response) {
        return (response.data)
      }).catch(function (error) {
        //console.log("error",error.response);
        return error.response ;
      });
    }

}

export default ExperiencesApi;
