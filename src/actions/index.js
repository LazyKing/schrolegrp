import applicantsApi from '../api/ApplicantsApi';

export * from './Login_Actions'
export * from './Register_Actions'

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

export function testDispatch() {
  return function (dispatch) {
    dispatch(createCatSuccess('cat'));
  };
}

export function createCatSuccess(cat) {
    return {
      type: "CAT_SUCCESS" ,
      payload: cat
    };
}

export function getPersonalDetailsDispatch(user) {
  return function(dispatch) {
    return applicantsApi.getApplicantsProfile(user).then(profile => {
      //console.log("dispatch person suc::",profile);
      dispatch(getPersonalDetails(profile));
    }).catch(error => {
      //console.log("dispatch person::",error);
      throw(error);
    });
  };
}

export function updatePersonalDetailsDispatch(user, personalDetails) {
  return function(dispatch) {
    return applicantsApi.updateApplicantsPersonalDetails(user, personalDetails).then(profile => {
      dispatch(updatePersonalDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateOtherInfoDispatch(user, personalDetails) {
  return function(dispatch) {
    return applicantsApi.updateOtherInfo(user, personalDetails).then(profile => {
      dispatch(updateOtherInfo(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateEmergencyDetailsDispatch(user, personalDetails) {
  return function(dispatch) {
    return applicantsApi.updateApplicantsEmergencyContact(user, personalDetails).then(profile => {
      dispatch(updateEmergencyDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCriminalRecorsDispatch(user, personalDetails) {
  return function(dispatch) {
    return applicantsApi.updateApplicantsCriminalRecors(user, personalDetails).then(profile => {
      dispatch(criminalRecorsDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateProfileImageDispatch(user, profileImage) {
  return function(dispatch) {
    return applicantsApi.updateProfileImage(user, profileImage).then(profile => {
      dispatch(updateProfileImage(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateResumeDispatch(user, resume) {
  return function(dispatch) {
    return applicantsApi.updateResume(user, resume).then(profile => {
      dispatch(updateResume(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNewDependantDispatch(user, newDependant) {
  return function(dispatch) {
    return applicantsApi.createNewDependant(user, newDependant).then(response => {
      dispatch(createDependant(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteDependantDispatch(user, dependentId) {
  return function(dispatch) {
    return applicantsApi.deleteDependant(user, dependentId).then(response => {
      dispatch(deleteDependant(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateApplicantsContactDetailsDispatch(user, contactDetails) {
  return function(dispatch) {
    return applicantsApi.updateApplicantsContactDetails(user, contactDetails).then(response => {
      dispatch(updateApplicantsContactDetails(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getPersonalDetails(profile) {
  return {
    type: "GET_USER_PROFILE",
    payload: profile
  };
}

export function createDependant(dependants) {
  return {
    type: "CREATE_NEW_DEPENDANT",
    payload: dependants
  };
}

export function updatePersonalDetails(profile) {
  return {
    type: "UPDATE_PERSONAL_DETAILS",
    payload: profile
  };
}

export function updateOtherInfo(profile) {
  return {
    type: "UPDATE_OTHER_INFO",
    payload: profile
  };
}

export function updateApplicantsContactDetails(profile) {
  return {
    type: "UPDATE_CONTACT_DETAILS",
    payload: profile
  };
}

export function updateEmergencyDetails(profile) {
  return {
    type: "UPDATE_EMERGENCY_DETAILS",
    payload: profile
  };
}

export function updateProfileImage(profile) {
  return {
    type: "UPDATE_PROFILE_IMAGE",
    payload: profile
  };
}

export function updateResume(profile) {
  return {
    type: "UPDATE_RESUME",
    payload: profile
  };
}

export function criminalRecorsDetails(profile) {
  return {
    type: "UPDATE_CRIMINAL_CONVICTIONS",
    payload: profile
  };
}

export function deleteDependant(dependants) {
  return {
    type: "DELETE_DEPENDANT",
    payload: dependants
  };
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER",
    payload: {}
  };
}
  /*
  export function createCat(cat) {
  return function (dispatch) {
    return catApi.createCat(cat).then(responseCat => {
      dispatch(createCatSuccess(responseCat));
      return responseCat;
    }).catch(error => {
      throw(error);
    });
  };
}
*/
