// State argument is not application state, only the state
// this reducer is responsible for
import {  browserHistory  } from 'react-router'

const INITIAL_STATE = { 
	applicantsProfile: {},
	qualificationsDetails: {},
  experiences: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "GET_USER_PROFILE":
    //console.log(action);
      return { ...state, applicantsProfile: action.payload }

    case "GET_ALL_QUALIFICATIONS":
    //console.log(action);
    return { ...state, qualificationsDetails: action.payload }

    case "GET_ALL_EXPERIENCES":
    //console.log(action);
    return { ...state, experiences: action.payload }

    case "UPDATE_PERSONAL_DETAILS":
    //console.log(action);
      return action.payload;

    default: 
      return state;
  }
}
