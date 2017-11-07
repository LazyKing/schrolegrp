import applicantsApi from '../api/ApplicantsApi';

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

export function submitLoginDispatch(user) {
  return function (dispatch) {
    dispatch(submitLogin(user));
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

export function registerUser(user) {
  return {
    type: "REGISTER_USER",
    payload: user
  };
}

export function forgotPassword(user) {
  return {
    type: "FORGOT_PASSWORD",
    payload: user
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
      dispatch(getPersonalDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updatePersonalDetailsDispatch(user, personalDetails) {
  return function(dispatch) {
    return applicantsApi.getApplicantsProfile(user, personalDetails).then(profile => {
      dispatch(getPersonalDetails(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllQualificationsDetailsDispatch(user) {
  return function(dispatch) {
    return applicantsApi.getAllQualifiacationsDetails(user).then(profile => {
      dispatch(getAllQualifiacations(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllExperiencesDetailsDispatch(user) {
  return function(dispatch) {
    return applicantsApi.getAllExperiencesDetails(user).then(profile => {
      dispatch(getAllExperiences(profile));
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

export function getAllQualifiacations(profile) {
  return {
    type: "GET_ALL_QUALIFICATIONS",
    payload: profile
  };
}

export function getAllExperiences(profile) {
  return {
    type: "GET_ALL_EXPERIENCES",
    payload: profile
  };
}

export function updatePersonalDetails(profile) {
  return {
    type: "UPDATE_PERSONAL_DETAILS",
    payload: profile
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
