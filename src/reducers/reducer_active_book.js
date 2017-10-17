// State argument is not application state, only the state
// this reducer is responsible for

const INITIAL_STATE = {
	email: '',
	password: ''
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      console.log(action.payload);
      return action.payload;

    case "SUBMIT_LOGIN":
	    console.log(action.payload);
	    function handleErrors(response) {
    		if ( response.success == false) {
        		throw Error(response.message);
    		}
    		return true;
		}
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
		.then((responseJson) => { handleErrors(responseJson)} )
	  	.then((responseJson) => {
	  		//alert("successful login");
	        console.log(responseJson);
	        return true;
	      })
	      .catch((error) => {
	      	alert("unauthorized");
	        console.error(error);
	      });
      return action.payload;

    case "PASSWORD_CHANGED":
      console.log(action.payload);
      return { ...state, password: action.payload};
      
    case "EMAIL_CHANGED":
      console.log(action.payload);
      return { ...state, email: action.payload}; 
  }

  return state;
}