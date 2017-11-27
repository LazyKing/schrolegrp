import SchoolApi from './SchoolApi';

export function getSchoolDetailsDispatch(user) {
  return function(dispatch) {
    return SchoolApi.getSchoolDetails(user).then(profile => {
      //console.log("dispatch person suc::",profile);
      dispatch(getSchoolDetails(profile));
    }).catch(error => {
      //console.log("dispatch person::",error);
      throw(error);
    });
  };
}

export function updateSchoolDetailsDispatch(user, schoolDetails, schoolId) {
  return function(dispatch) {
    return SchoolApi.updateSchoolDetails(user, schoolDetails, schoolId).then(schoolDetails => {
      dispatch(updateSchoolDetails(schoolDetails));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateOtherInfoDispatch(user, personalDetails) {
  return function(dispatch) {
    return SchoolApi.updateOtherInfo(user, personalDetails).then(profile => {
      dispatch(updateOtherInfo(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateEmergencyDetailsDispatch(user, personalDetails) {
  return function(dispatch) {
    return SchoolApi.updateApplicantsEmergencyContact(user, personalDetails).then(profile => {
      dispatch(updateEmergencyDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCriminalRecorsDispatch(user, personalDetails) {
  return function(dispatch) {
    return SchoolApi.updateApplicantsCriminalRecors(user, personalDetails).then(profile => {
      dispatch(criminalRecorsDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateProfileImageDispatch(user, profileImage) {
  return function(dispatch) {
    return SchoolApi.updateProfileImage(user, profileImage).then(profile => {
      dispatch(updateProfileImage(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateResumeDispatch(user, resume) {
  return function(dispatch) {
    return SchoolApi.updateResume(user, resume).then(profile => {
      dispatch(updateResume(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteDependantDispatch(user, dependentId) {
  return function(dispatch) {
    return SchoolApi.deleteDependant(user, dependentId).then(response => {
      dispatch(deleteDependant(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateApplicantsContactDetailsDispatch(user, contactDetails) {
  return function(dispatch) {
    return SchoolApi.updateApplicantsContactDetails(user, contactDetails).then(response => {
      dispatch(updateApplicantsContactDetails(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSchoolDetails(profile) {
  return {
    type: "GET_SCHOOL_PROFILE",
    payload: profile
  };
}

export function updateSchoolDetails(schoolDetails) {
  return {
    type: "UPDATE_SCHOOL_DETAILS",
    payload: schoolDetails
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
