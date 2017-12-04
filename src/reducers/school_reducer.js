// State argument is not application state, only the state
// this reducer is responsible for
import {  browserHistory  } from 'react-router'
import _ from 'lodash';

const INITIAL_STATE = {
	schoolProfile: {}
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "GET_SCHOOL_PROFILE":
    //console.log(action.payload);
      if( action.payload || action.payload.status === 401 ) {
        localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
        return { ...state, applicantsProfile: {} };
      }
      else
        return { ...state, schoolProfile: action.payload }



    case "UPDATE_SCHOOL_DETAILS":
      //console.log(action.payload);
      return { ...state, schoolProfile: action.payload }



    case "DELETE_DEPENDANT":
      //creating a new copy of objects
      var dependents = JSON.parse(JSON.stringify(state.applicantsProfile.dependents))
      _.remove(dependents, function( dependent ) {
        return dependent.id === action.payload.dependent.id;
      });
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': dependents });
      return { ...state, applicantsProfile: newApplicantsState };

    case "LOGOUT_USER":
      localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
      return state;

    default:
      return state;
  }
}
