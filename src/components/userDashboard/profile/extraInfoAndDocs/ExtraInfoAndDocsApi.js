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
	  	//console.log(user)
	  	const {auth_token,user_email} = user
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'GET',
	      url: 'http://13.126.41.88/applicants/extra',
	      headers: headers
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      //console.log("error",error.response);
	      return error.response ;
	    });
	}

	static updateQualification( user, qualificationUpdate, qualificationId) {
	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'PUT',
	      url: `http://13.126.41.88/applicants/qualifications/${qualificationId}`,
	      headers: headers,
	      data: JSON.stringify({'data': qualificationUpdate})
	    }).then(function (response) {
	      return (response.data)
	    }).catch(function (error) {
	      return error.response ;
	    });
  	}

  	static createNewLicence( user, newLicence) {
	    const {auth_token,user_email} = user;
	    const headers = this.requestHeaders(auth_token,user_email);

	    return axios({
	      method: 'POST',
	      url: 'http://13.126.41.88/applicants/licences',
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