// State argument is not application state, only the state
// this reducer is responsible for
import {  browserHistory  } from 'react-router'
const INITIAL_STATE = {
	email: '',
	password: '',
	registrationSuccessStatus: '',
	errorMessage: '',
	errorSummary: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "SUBMIT_LOGIN":
			//console.log(action.payload);
			localStorage.setItem("userprofile", JSON.stringify(action.payload.data.user) );
			browserHistory.push({
				pathname: '/userprofile',
				state: { stateData: action.payload.data.user }
			});
			return { ...state , registrationSuccessStatus: action.payload.status };

     case "FORGOT_PASSWORD":
	    //console.log(action.payload);
			var baseUrl = global.devHost ;
			const forgotUrl = baseUrl + '/users/sign_in';
	  	fetch(forgotUrl, {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    "user":{
		      "email":action.payload.email,
		      "password":action.payload.password
		    }
		  })
		}).then((response) => response.json())
	  	.then((responseJson) => {
	  		if(responseJson.success){
	  			alert("successful login");
	        	console.log(responseJson);
	  		} else {
	  			alert("authentication failed");
	  		}
	        return true;
	      })
	      .catch((error) => {
	      	alert("unauthorized");
	        console.error(error);
	      });
      return action.payload;


    case "LOG_OUT":
		var baseUrl = global.devHost ;
		const logoutUrl = baseUrl + '/users/sign_out';
	  	fetch(logoutUrl, {
		  method: 'DELETE',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'X-API-TOKEN' : action.payload.auth_token,
		    'X-API-EMAIL' : action.payload.user_email
		  }
		}).then((response) => response.json())
	  	.then((responseJson) => {
	  		//console.log(responseJson);
	  		if(responseJson.success){
	        	localStorage.removeItem("userprofile");
				browserHistory.push({
					pathname: '/Login'
				});
	  		} else {
	  			alert("Invalid session");
	  			localStorage.removeItem("userprofile");
				browserHistory.push({
					pathname: '/Login'
				});

	  		}
	        return true;
	      })
	      .catch((error) => {
	      	alert("unauthorized");
	        console.error(error);
	      });
      return action.payload;

    case "REGISTER_APPLICANT":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status };

    case "HANDLE_ERROR":
    //console.log(action.payload);
    	return { ...state , registrationSuccessStatus: action.payload.status,
			errorMessage: action.payload.data.message, errorSummary: action.payload.statusText}

		case "RESET_STORE":
				return { ...state, registrationSuccessStatus: INITIAL_STATE.registrationSuccessStatus };

    default:
      return state;
  }
}
