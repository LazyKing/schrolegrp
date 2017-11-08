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
    return { ...state, experiences: action.payload.experiences }

    case "CREATE_NEW_DEPENDANT":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': action.payload.dependent });
    return { ...state, applicantsProfile: newApplicantsState };

    case "CREATE_NEW_QUALIFICATION":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': action.payload.qualifications });
    return { ...state, qualificationsDetails: newApplicantsState };

    case "CREATE_NEW_EXPERIENCE":
      //console.log(action.payload);
      var experiences = action.payload.experiences;
      return Object.assign({}, state , {'experiences': experiences });    
    
    case "UPDATE_QUALIFICATION":
      //console.log(action);
      var qualifications = action.payload.qualifications;
      var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': qualifications });
      return { ...state, qualificationsDetails: newApplicantsState };

    case "UPDATE_PERSONAL_DETAILS":
      //console.log(action);
      var personalDetails = action.payload.personal_details;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'personal_details': personalDetails });
      return { ...state, applicantsProfile: newApplicantsState };

    case "UPDATE_CONTACT_DETAILS":
      var contactDetails = action.payload.contact_details;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'contact_details': contactDetails });
      return { ...state, applicantsProfile: newApplicantsState };

    case "UPDATE_EMERGENCY_DETAILS":
      var emergencyDetails = action.payload.emergency_contact;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'emergency_contact': emergencyDetails });
      return { ...state, applicantsProfile: newApplicantsState };

    case "UPDATE_CRIMINAL_CONVICTIONS":
      var criminalConvictions = action.payload.criminal_convictions;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'criminal_convictions': criminalConvictions });
      return { ...state, applicantsProfile: newApplicantsState };

    case "UPDATE_EXPERIENCE":
      var experiences = action.payload.experiences;
      return Object.assign({}, state , {'experiences': experiences });    

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
