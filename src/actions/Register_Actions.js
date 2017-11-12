import AunthenticationAndRegistrationApi from '../api/AunthenticationAndRegistrationApi';

export function registerApplicantDispatch(user) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerApplicant(user).then(profile => {
      //console.log("dispatch person suc::",profile);
      dispatch(registerApplicant(profile));
    }).catch(error => {
      //console.log("dispatch person::",error);
      throw(error);
    });
  };
}


export function registerSchoolDispatch(user) {
  return function (dispatch) {
    dispatch(registerSchool(user));
  };
}

export function registerApplicant(user) {
  return {
    type: "REGISTER_APPLICANT",
    payload: user
  };
}

export function registerSchool(user) {
  return {
    type: "REGISTER_SCHOOL",
    payload: user
  };
}

export function registerUser(user) {
  return {
    type: "REGISTER_USER",
    payload: user
  };
}

