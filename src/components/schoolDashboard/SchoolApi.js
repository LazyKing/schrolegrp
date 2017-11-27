import axios from 'axios';
import {  browserHistory  } from 'react-router'

class SchoolApi {

  static requestHeaders(auth_token,user_email) {
    return {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : auth_token,
		    'X-API-EMAIL' : user_email
		 }
  }

  static getSchoolDetails(user) {
  	const baseUrl = global.devHost ;
    const getSchoolDetailsUrl = baseUrl + '/schools/profile';
  	const {auth_token,user_email} = user
    const headers = this.requestHeaders(auth_token,user_email);
    return axios({
      method: 'GET',
      url: getSchoolDetailsUrl,
      headers: headers
    }).then(function (response) {
      //console.log("response",response);
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
    });
  }

  static updateSchoolDetails( user, schoolDetails, schoolId) {
    const baseUrl = global.devHost ;
    const updateSchoolDetailsUrl = baseUrl + `/schools/profile`;
  	const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);

    return axios({
      method: 'PUT',
      url: updateSchoolDetailsUrl,
      headers: headers,
      data: JSON.stringify({'data': schoolDetails})
    }).then(function (response) {
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
    });
  }

  static updateApplicantsEmergencyContact( user, emergencyDetails) {
    const baseUrl = global.devHost ;
    const updateApplicantsEmergencyContactUrl = baseUrl + '/applicants/profile/emergency_contact';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(updateApplicantsEmergencyContactUrl , {
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
    const baseUrl = global.devHost ;
    const updateApplicantsContactDetailsUrl = baseUrl + '/applicants/profile/contact_details';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(updateApplicantsContactDetailsUrl , {
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
    const baseUrl = global.devHost ;
    const updateApplicantsCriminalRecorsUrl = baseUrl + '/applicants/profile/criminal_convictions';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(updateApplicantsCriminalRecorsUrl , {
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
    const baseUrl = global.devHost ;
    const createNewDependantUrl = baseUrl + '/applicants/dependents';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(createNewDependantUrl , {
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

  static updateProfileImage( user, profileUpdate ) {
    const baseUrl = global.devHost ;
    const updateProfileImageUrl = baseUrl + '/applicants/profile/picture';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    return axios({
      method: 'POST',
      url: updateProfileImageUrl,
      headers: headers,
      data: JSON.stringify({'picture': profileUpdate})
    }).then(function (response) {
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
    });
  }

  static updateResume( user, profileUpdate ) {
    const baseUrl = global.devHost ;
    const updateProfileImageUrl = baseUrl + '/applicants/profile/resume';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    return axios({
      method: 'POST',
      url: updateProfileImageUrl,
      headers: headers,
      data: JSON.stringify({'resume': profileUpdate})
    }).then(function (response) {
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
    });
  }

  static updateOtherInfo( user, profileUpdate ) {
    const baseUrl = global.devHost ;
    const updateOtherInfoUrl = baseUrl + '/applicants/profile/other';
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    return axios({
      method: 'PUT',
      url: updateOtherInfoUrl,
      headers: headers,
      data: JSON.stringify({'data': profileUpdate})
    }).then(function (response) {
      return (response.data)
    }).catch(function (error) {
      //console.log("error",error.response);
      return error.response ;
    });
  }

  static deleteDependant( user, dependentId) {
    const baseUrl = global.devHost ;
    const deleteDependantUrl = baseUrl + `/applicants/dependents/${dependentId}`;
    const {auth_token,user_email} = user;
    const headers = this.requestHeaders(auth_token,user_email);
    const request = new Request(deleteDependantUrl , {
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

export default SchoolApi;
