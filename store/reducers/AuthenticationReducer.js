import { SIGNUP } from "../actions/AuthenticationActions";
import { LOG_IN } from "../actions/AuthenticationActions";

const initialState = {
  idToken: "",
  email: "",
  password: ""
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("Action payload", action.payload);
      return { ...state, email: action.payload.email, idToken: action.payload.idToken };

    case LOG_IN:
      console.log("Login action payload", action.payload);
      return { ...state, email: action.payload.email, idToken: action.payload.idToken };

    default:
      return state; //does not do anything yet​
  }
};

export default authenticationReducer;