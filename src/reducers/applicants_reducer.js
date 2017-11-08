// State argument is not application state, only the state
// this reducer is responsible for
import {  browserHistory  } from 'react-router'
import _ from 'lodash';

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

    case "CREATE_NEW_DEPENDANT":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': action.payload.dependent });
    return { ...state, applicantsProfile: newApplicantsState };

    case "CREATE_NEW_QUALIFICATION":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': action.payload.qualifications });
    return { ...state, qualificationsDetails: newApplicantsState };
    
    case "UPDATE_QUALIFICATION":
      console.log(action);
      var qualifications = action.payload.qualifications;
      var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': qualifications });
      return { ...state, qualificationsDetails: newApplicantsState };

    case "UPDATE_PERSONAL_DETAILS":
    //console.log(action);
      return action.payload;

    case "DELETE_DEPENDANT":
      //console.log(action.payload.dependent.id);
      //creating a new copy of objects
      var dependents = JSON.parse(JSON.stringify(state.applicantsProfile.dependents))
      _.remove(dependents, function( dependent ) {
        return dependent.id === action.payload.dependent.id;
      });
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': dependents });
      return { ...state, applicantsProfile: newApplicantsState };

    default: 
      return state;
  }
}
