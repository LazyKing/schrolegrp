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

export function getCurrentSchoolDetailsDispatch(user, id) {
  return function(dispatch) {
    return SchoolsApi.getCurrentSchoolDetails(user, id).then(schoolsDetails => {
      dispatch(getCurrentSchoolDetails(schoolsDetails));
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

export function getCurrentSchoolDetails(schoolDetails) {
  return {
    type: "CURRENT_SCHOOL_DETAILS",
    payload: schoolDetails
  };
}
