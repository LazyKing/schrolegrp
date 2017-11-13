import AunthenticationAndRegistrationApi from '../api/AunthenticationAndRegistrationApi';

export function registerApplicantDispatch(user) {
  return function(dispatch) {
    return AunthenticationAndRegistrationApi.registerApplicant(user).then(response => {
      //console.log("dispatch person suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(registerApplicant(response));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
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

export function resetStore(data) {
  return {
    type: "RESET_STORE",
    payload: data
  };
}

export function handleError(error) {
  return {
    type: "HANDLE_ERROR",
    payload: error
  };
}
