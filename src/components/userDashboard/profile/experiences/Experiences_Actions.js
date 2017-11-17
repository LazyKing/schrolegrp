import ExperiencesApi from './ExperiencesApi';

export function getAllExperiencesDetailsDispatch(user) {
  return function(dispatch) {
    return ExperiencesApi.getAllExperiencesDetails(user).then(profile => {
      dispatch(getAllExperiences(profile));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getAllExperiences(profile) {
  return {
    type: "GET_ALL_EXPERIENCES",
    payload: profile
  };
}

export function createNewExperienceDispatch(user, newExperience) {
  return function(dispatch) {
    return ExperiencesApi.createNewExperience(user, newExperience).then(response => {
      dispatch(createExperience(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createExperience(experiences) {
  return {
    type: "CREATE_NEW_EXPERIENCE",
    payload: experiences
  };
}

export function updateExperienceDispatch(user, experienceUpdatePayload, experienceId) {
  return function(dispatch) {
    return ExperiencesApi.updateExperience(user, experienceUpdatePayload, experienceId).then(response => {
      dispatch(updateExperience(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateExperience(experiences) {
  return {
    type: "UPDATE_EXPERIENCE",
    payload: experiences
  };
}

export function deleteExperienceDispatch(user, experienceId) {
  return function(dispatch) {
    return ExperiencesApi.deleteExperience(user, experienceId).then(response => {
      dispatch(deleteExperience(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteExperience(experiences) {
  return {
    type: "DELETE_EXPERIENCE",
    payload: experiences
  };
}
