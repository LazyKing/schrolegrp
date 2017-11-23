import ReferencesApi from './ReferencesApi';

export function getAllReferencesDetailsDispatch(user) {
  return function(dispatch) {
    return ReferencesApi.getAllReferencesDetails(user).then(references => {
      dispatch(getAllReferencesDetails(references));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNewAcademicReferenceDispatch(user, newAcademicReference) {
  return function(dispatch) {
    return ReferencesApi.createNewAcademicReference(user, newAcademicReference).then(response => {
      dispatch(createNewAcademicReference(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createNewAdministrativeReferencesDispatch(user, newAdministrativeReference) {
  return function(dispatch) {
    return ReferencesApi.createNewAdministrativeReferences(user, newAdministrativeReference).then(response => {
      dispatch(createNewAdministrativeReferences(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateAcademicReferencesDispatch(user, qualificationUpdatePayload, qualificationId) {
  return function(dispatch) {
    return ReferencesApi.updateAcademicReferences(user, qualificationUpdatePayload, qualificationId).then(response => {
      dispatch(updateAcademicReferences(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateAdministrativeReferencesDispatch(user, licenceUpdatePayload, licenceId ) {
  return function(dispatch) {
    return ReferencesApi.updateAdministrativeReferences(user, licenceUpdatePayload, licenceId).then(response => {
      dispatch(updateAdministrativeReferences(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllReferencesDetails(references) {
  return {
    type: "GET_ALL_REFERENCES",
    payload: references
  };
}

export function createNewAcademicReference(references) {
  return {
    type: "CREATE_NEW_ACADEMIC_REFERENCE",
    payload: references
  };
}

export function createNewAdministrativeReferences(references) {
  return {
    type: "CREATE_NEW_ADMINISTRATIVE_REFERENCE",
    payload: references
  };
}

export function updateAcademicReferences(qualification) {
  return {
    type: "UPDATE_ACADEMIC_REFERENCE",
    payload: qualification
  };
}

export function updateAdministrativeReferences(licence) {
  return {
    type: "UPDATE_ADMINISTRATIVE_REFERENCE",
    payload: licence
  };
}
