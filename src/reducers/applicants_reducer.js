// State argument is not application state, only the state
// this reducer is responsible for
import {  browserHistory  } from 'react-router'

const INITIAL_STATE = { applicantsProfile: {} }

export default function(state = INITIAL_STATE.applicantsProfile, action) {
  switch (action.type) {

    case "GET_USER_PROFILE":
    //console.log(action);
      return action.payload;

    case "UPDATE_PERSONAL_DETAILS":
    //console.log(action);
      return action.payload;

    default: 
      return state;
  }
}
