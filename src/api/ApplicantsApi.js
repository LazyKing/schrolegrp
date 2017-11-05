class ApplicantsApi {

  static requestHeaders(auth_token,user_email) {
    return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  }

  static getApplicantsProfile(user) {
  	//console.log(user)
  	const {auth_token,user_email} = user
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/profile', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateApplicantsPersonalDetails( user, personalDetails) {
  	//console.log(user)
  	const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/profile', {
      method: 'POST',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

}

export default ApplicantsApi;