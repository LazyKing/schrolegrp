import axios from 'axios';

class ExtraInfoAndDocsApi {

	static requestHeaders(auth_token,user_email) {
    	return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  	}

	static getExtraInfoBasicDetails(user) {
			const baseUrl = global.devHost ;
			const getExtraInfoBasicUrl = baseUrl + '/applicants/extra';

	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: getExtraInfoBasicUrl,
	      headers: headers
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
	}

	static updateExtraInfoBasicDetails( user, extraInfoBasicUpdate) {
		const baseUrl = global.devHost ;
		const updateExtraInfoBasicDetailsUrl = baseUrl + '/applicants/profile/extra';

			const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'PUT',
	      url: updateExtraInfoBasicDetailsUrl,
	      headers: headers,
	      data: JSON.stringify({'data': extraInfoBasicUpdate})
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

}


export default ExtraInfoAndDocsApi;
