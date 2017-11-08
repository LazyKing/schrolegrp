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

  static getAllQualifiacationsDetails(user) {
  	//console.log(user)
  	const {auth_token,user_email} = user
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/qualifications', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllExperiencesDetails(user) {
  	//console.log(user)
  	const {auth_token,user_email} = user
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/experiences', {
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

  static createNewDependant( user, newDependant) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/dependents', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({'data': newDependant})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createNewQualification( user, newQualification) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/qualifications', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({'data': newQualification})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  
  static updateQualification( user, qualificationUpdate, qualificationId) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(`http://13.126.41.88/applicants/qualifications/${qualificationId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({'data': qualificationUpdate})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteDependant( user, dependentId) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(`http://13.126.41.88/applicants/dependents/${dependentId}`, {
      method: 'DELETE',
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