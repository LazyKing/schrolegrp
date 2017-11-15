import AunthenticationAndRegistrationApi from '../api/AunthenticationAndRegistrationApi';

export function submitLoginDispatch( user, password) {

  return function(dispatch) {
    return AunthenticationAndRegistrationApi.applicantLogin( user, password).then(response => {
      //console.log("dispatch login suc::",response);
      if(response.status === 201 || response.status === 200)
        dispatch(submitLogin(response));
      else
        dispatch(handleError(response));
    }).catch(error => {
      console.log("dispatch person::",error);
    });
  };
}

export function submitLogin(user) {
  return {
    type: "SUBMIT_LOGIN",
    payload: user
  };
}

export function logout(token) {
  return {
    type: "LOG_OUT",
    payload: token
  };
}

export function forgotPassword(user) {
  return {
    type: "FORGOT_PASSWORD",
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
