import qualificationAndLicenceApi from './QualificationsAndLicencesApi';





export function getAllQualificationsDetailsDispatch(user) {
  return function(dispatch) {
    return qualificationAndLicenceApi.getAllQualifiacationsDetails(user).then(profile => {
      dispatch(getAllQualifiacations(profile));
    }).catch(error => {
      throw(error);
    });
  };
}


export function createNewQualificationDispatch(user, newQualification) {
  return function(dispatch) {
    return qualificationAndLicenceApi.createNewQualification(user, newQualification).then(response => {
      dispatch(createQualification(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateQualificationDispatch(user, qualificationUpdatePayload, qualificationId) {
  return function(dispatch) {
    return qualificationAndLicenceApi.updateQualification(user, qualificationUpdatePayload, qualificationId).then(response => {
      dispatch(updateQualification(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createLicenceDispatch(user, licenceCreatePayload ) {
  return function(dispatch) {
    return qualificationAndLicenceApi.createNewLicence(user, licenceCreatePayload).then(response => {
      dispatch(createLicense(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateLicenceDispatch(user, licenceUpdatePayload, licenceId ) {
  return function(dispatch) {
    return qualificationAndLicenceApi.updateLicence(user, licenceUpdatePayload, licenceId).then(response => {
      dispatch(updateLicense(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllQualifiacations(profile) {
  return {
    type: "GET_ALL_QUALIFICATIONS",
    payload: profile
  };
}

/*export function getAllExperiences(profile) {
  return {
    type: "GET_ALL_EXPERIENCES",
    payload: profile
  };
}*/

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

export function createLicense(licences) {
  return {
    type: "CREATE_NEW_LICENCE",
    payload: licences
  };
}

export function updateLicense(licence) {
  return {
    type: "UPDATE_LICENSE",
    payload: licence
  };
}