import { GET_USER } from "../actions/user.action";

const initialState = {};

export default function userReducer(state= initialState, action: any) {
  switch (action.type) {
    case  GET_USER:
      return action.payload
    default: 
    return state;
  }
  return initialState;
}

// export default function template( state= initialState,  action: any) {

// }