import SchoolsApi from './SchoolsApi';

export function getSchoolListDispatch(user) {
  return function(dispatch) {
    return SchoolsApi.getSchoolList(user).then(schools => {
      dispatch(getSchoolList(schools));
    }).catch(error => {
      throw(error);
    });
  };
}


export function createNewQualificationDispatch(user, newQualification) {
  return function(dispatch) {
    return SchoolsApi.createNewQualification(user, newQualification).then(response => {
      dispatch(createQualification(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateQualificationDispatch(user, qualificationUpdatePayload, qualificationId) {
  return function(dispatch) {
    return SchoolsApi.updateQualification(user, qualificationUpdatePayload, qualificationId).then(response => {
      dispatch(updateQualification(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSchoolList(schools) {
  return {
    type: "GET_ALL_SCHOOLS",
    payload: schools
  };
}

export function createQualification(qualifications) {
  return {
    type: "CREATE_NEW_QUALIFICATION",
    payload: qualifications
  };
}

export function updateQualification(qualification) {
  return {
    type: "UPDATE_QUALIFICATION",
    payload: qualification
  };
}
