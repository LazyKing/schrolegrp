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
      if( action.payload.status === 401 ) {
        localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
        return { ...state, applicantsProfile: {} };
      }
      else
        return { ...state, schoolProfile: action.payload }

    case "GET_ALL_QUALIFICATIONS":
      if( action.payload.status === 401 ) {
        localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
        return { ...state, qualificationsDetails: {} }
      }
      else
        return { ...state, qualificationsDetails: action.payload }

    case "GET_ALL_EXPERIENCES":
      if( action.payload.status === 401 ) {
        localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
        return { ...state, experiences: {} }
      }
      else
        return { ...state, experiences: action.payload.experiences }

    case "GET_EXTRA_INFO_BASIC":
    //console.log(action.payload)
      if( action.payload.status === 401 ) {
        localStorage.removeItem("userprofile");
        browserHistory.push({
          pathname: '/Login'
        });
        return { ...state, extraInfo: {} }
      }
      else
        return { ...state, extraInfo: action.payload }

			case "GET_ALL_REFERENCES":
	    console.log(action.payload)
	      if( action.payload.status === 401 ) {
	        localStorage.removeItem("userprofile");
	        browserHistory.push({
	          pathname: '/Login'
	        });
	        return { ...state, references: {} }
	      }
	      else
	        return { ...state, references: action.payload.references }

    case "CREATE_NEW_DEPENDANT":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': action.payload.dependent });
    return { ...state, applicantsProfile: newApplicantsState };

    case "CREATE_NEW_QUALIFICATION":
    //console.log(action.payload);
    var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': action.payload.qualifications });
    return { ...state, qualificationsDetails: newApplicantsState };

    case "CREATE_NEW_LICENCE":
      //console.log(action.payload);
      var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'licences': action.payload.licences });
      return { ...state, qualificationsDetails: newApplicantsState };

    case "CREATE_NEW_EXPERIENCE":
      //console.log(action.payload);
      var experiences = action.payload.experiences;
      return Object.assign({}, state , {'experiences': experiences });

		case "CREATE_NEW_ACADEMIC_REFERENCE":
		//console.log(action.payload);
		var newApplicantsState = Object.assign({}, state.references , {'academic': action.payload.academic });
		return { ...state, references: newApplicantsState };

		case "CREATE_NEW_ADMINISTRATIVE_REFERENCE":
		//console.log(action.payload);
		var newApplicantsState = Object.assign({}, state.references , {'administrative': action.payload.administrative });
		return { ...state, references: newApplicantsState };

    case "UPDATE_QUALIFICATION":
      //console.log(action);
      var qualifications = action.payload.qualifications;
      var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': qualifications });
      return { ...state, qualificationsDetails: newApplicantsState };

    case "UPDATE_LICENSE":
      //console.log(action);
      var licences = action.payload.licences;
      var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'licences': licences });
      return { ...state, qualificationsDetails: newApplicantsState };

    case "UPDATE_PERSONAL_DETAILS":
      //console.log(action);
      var personalDetails = action.payload.personal_details;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'personal_details': personalDetails });
      return { ...state, applicantsProfile: newApplicantsState };

		case "UPDATE_OTHER_INFO":
				//console.log(action.payload);
				var applicantsDetails = action.payload;
				return { ...state, applicantsProfile: applicantsDetails };

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

    case "UPDATE_PROFILE_IMAGE":
      var profilePic = action.payload.profile_pic_url;
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'profile_pic_url': profilePic });
      return { ...state, applicantsProfile: newApplicantsState };

		case "UPDATE_RESUME":
	      var cvUrl = action.payload.resume;
	      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'cv_url': cvUrl });
	      return { ...state, applicantsProfile: newApplicantsState };

	case "UPDATE_EXTRA_INFO_BASIC":
			//console.log(action.payload)
			return { ...state, extraInfo: action.payload.extra }

    case "DELETE_DEPENDANT":
      //creating a new copy of objects
      var dependents = JSON.parse(JSON.stringify(state.applicantsProfile.dependents))
      _.remove(dependents, function( dependent ) {
        return dependent.id === action.payload.dependent.id;
      });
      var newApplicantsState = Object.assign({}, state.applicantsProfile , {'dependents': dependents });
      return { ...state, applicantsProfile: newApplicantsState };

		case "DELETE_QUALIFICATION":
			//creating a new copy of objects
			var qualifications = JSON.parse(JSON.stringify(state.qualificationsDetails.qualifications))
			_.remove(qualifications, function( qualification ) {
				return qualification.id === action.payload.qualification.id;
			});
			var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'qualifications': qualifications });
			return { ...state, qualificationsDetails: newApplicantsState };

		case "DELETE_LICENCE":
			//creating a new copy of objects
			var licences = JSON.parse(JSON.stringify(state.qualificationsDetails.licences))
			_.remove(licences, function( licence ) {
				return licence.id === action.payload.licence.id;
			});
			var newApplicantsState = Object.assign({}, state.qualificationsDetails , {'licences': licences });
			return { ...state, qualificationsDetails: newApplicantsState };

		case "DELETE_EXPERIENCE":
				//creating a new copy of objects
				var experiences = JSON.parse(JSON.stringify(state.experiences))
				_.remove(experiences, function( experience ) {
					return experience.id === action.payload.experience.id;
				});
				return Object.assign({}, state , {'experiences': experiences });

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
