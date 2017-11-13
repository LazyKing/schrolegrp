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
	  	fetch('http://13.126.41.88/users/sign_in', {
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
	        	console.log(responseJson);
	        	localStorage.setItem("userprofile", JSON.stringify(responseJson.user) );
				browserHistory.push({
					pathname: '/userprofile',
					state: { stateData: responseJson.user }
				});
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

      case "REGISTER_USER":
	    console.log(action.payload);
	  	fetch('http://35.154.148.146/users.json', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    "user":{
		      "email":action.payload.email,
		      "password":action.payload.password,
		      "password_confirmation": action.payload.passwordConfirm
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

     case "FORGOT_PASSWORD":
	    console.log(action.payload);
	  	fetch('http://35.154.148.146/users/sign_in', {
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
	  	fetch('http://13.126.41.88/users/sign_out', {
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
    console.log(action.payload);
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
