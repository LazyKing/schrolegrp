import axios from 'axios';
import {  browserHistory  } from 'react-router'

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
    return axios({
      method: 'GET',
      url: 'http://13.126.41.88/applicants/profile',
      headers: headers
    }).then(function (response) {
      //console.log("response",response);
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ; 
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
    const request = new Request('http://13.126.41.88/applicants/profile/personal_details', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({'data': personalDetails})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateApplicantsEmergencyContact( user, emergencyDetails) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/profile/emergency_contact', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({'data': emergencyDetails})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateApplicantsContactDetails( user, contactDetails) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/profile/contact_details', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({'data': contactDetails})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateApplicantsCriminalRecors( user, criminalRecors) {
    //console.log(user)
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request('http://13.126.41.88/applicants/profile/criminal_convictions', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({'data': criminalRecors})
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
    console.log(experienceUpdate)
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

  static updateProfileImage( user, profileUpdate ) {
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    return axios({
      method: 'POST',
      url: 'http://13.126.41.88/applicants/profile/picture',
      headers: headers,
      data: JSON.stringify({'picture': profileUpdate})
    }).then(function (response) {
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
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