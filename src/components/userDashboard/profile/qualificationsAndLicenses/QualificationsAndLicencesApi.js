import axios from 'axios';
import {  browserHistory  } from 'react-router'

class QualificationsAndLicencesApi {

	static requestHeaders(auth_token,user_email) {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  	}

	static getAllQualifiacationsDetails(user) {
			const baseUrl = global.devHost ;
			const getAllQualifiacationsUrl = baseUrl + '/applicants/qualifications';

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

	static createNewQualification( user, newQualification) {
			const baseUrl = global.devHost ;
			const createNewQualificationUrl = baseUrl + '/applicants/qualifications';

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'POST',
	      url: createNewQualificationUrl,
	      headers: headers,
	      data: JSON.stringify({'data': newQualification})
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      return error.response ;
	    });
	 }

	static updateQualification( user, qualificationUpdate, qualificationId) {
			const baseUrl = global.devHost ;
			const updateQualificationUrl = baseUrl + `/applicants/qualifications/${qualificationId}`;

			const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'PUT',
	      url: updateQualificationUrl,
	      headers: headers,
	      data: JSON.stringify({'data': qualificationUpdate})
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      return error.response ;
	    });
  	}

  	static createNewLicence( user, newLicence) {
			const baseUrl = global.devHost ;
			const createNewLicenceUrl = baseUrl + '/applicants/licences';

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'POST',
	      url: createNewLicenceUrl,
	      headers: headers,
	      data: JSON.stringify({'data': newLicence})
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

  	static updateLicence( user, licenceUpdatePayload, licenceId ) {
			const baseUrl = global.devHost ;
			const updateLicenceUrl = baseUrl + `/applicants/licences/${licenceId}`;

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'PUT',
	      url: updateLicenceUrl,
	      headers: headers,
	      data: JSON.stringify({'data': licenceUpdatePayload})
	    }).then(function (response) {
	      //console.log("response",response);
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
  	}

}


export default QualificationsAndLicencesApi;
