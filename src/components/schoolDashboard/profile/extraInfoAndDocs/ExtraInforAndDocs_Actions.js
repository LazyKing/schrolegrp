import ExtraInfoAndDocsApi from './ExtraInfoAndDocsApi';

export function getExtraInfoBsicDetailsDispatch(user) {
  return function(dispatch) {
    return ExtraInfoAndDocsApi.getExtraInfoBasicDetails(user).then(extraInfo => {
      dispatch(getExtraInfoBsicDetails(extraInfo));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateExtraInfoBasicDetailsDispatch(user, extraInfoBasicUpdate) {
  return function(dispatch) {
    return ExtraInfoAndDocsApi.updateExtraInfoBasicDetails(user, extraInfoBasicUpdate).then(extraInfo => {
      dispatch(updateExtraInfoBasicDetails(extraInfo));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getExtraInfoBsicDetails(extraInfo) {
  return {
    type: "GET_EXTRA_INFO_BASIC",
    payload: extraInfo
  };
}

export function updateExtraInfoBasicDetails(extraInfo) {
  return {
    type: "UPDATE_EXTRA_INFO_BASIC",
    payload: extraInfo
  };
}
