import axios from 'axios';
import {  browserHistory  } from 'react-router'

class ReferencesApi {

	static requestHeaders(auth_token,user_email) {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  	}

	static getAllReferencesDetails(user) {
			const baseUrl = global.devHost ;
			const getAllReferencesDetailsUrl = baseUrl + '/applicants/references';

	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: getAllReferencesDetailsUrl,
	      headers: headers
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
	}

	static createNewAcademicReference( user, newAcademicReference) {
			const baseUrl = global.devHost ;
			const createAcademicReferenceUrl = baseUrl + '/applicants/references';

	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'POST',
	      url: createAcademicReferenceUrl,
	      headers: headers,
	      data: JSON.stringify({'data': newAcademicReference})
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      return error.response ;
	    });
	 }

	 static createNewAdministrativeReferences( user, newAdministrativeReferences) {
			 const baseUrl = global.devHost ;
			 const createAdministrativeReferencesUrl = baseUrl + '/applicants/references';

			 const {auth_token,user_email} = user;
			 const headers = this.requestHeaders(auth_token,user_email);

			 return axios({
				 method: 'POST',
				 url: createAdministrativeReferencesUrl,
				 headers: headers,
				 data: JSON.stringify({'data': newAdministrativeReferences})
			 }).then(function (response) {
				 return (response.data)
			 }).catch(function (error) {
				 return error.response ;
			 });
		}

	static updateAcademicReferences( user, qualificationUpdate, qualificationId) {
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

  	static updateAdministrativeReferences( user, licenceUpdatePayload, licenceId ) {
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


export default ReferencesApi;
