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

export function getExtraInfoBsicDetails(extraInfo) {
  return {
    type: "GET_EXTRA_INFO_BASIC",
    payload: extraInfo
  };
}

export function updateProfileImage(profile) {
  return {
    type: "UPDATE_PROFILE_IMAGE",
    payload: profile
  };
}