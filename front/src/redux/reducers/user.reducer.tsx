import { GET_USER } from "../actions/user.action";
import { SET_INFOS } from "../actions/user.action";

const initialState = {
  user: '',
  techInfos: [
    {name: "A", value: 0},
    {name: "B", value: 0},
    {name: "C", value: 0}
  ],  
};

export default function userReducer(state= initialState, action: any) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state, 
        user: action.payload
      }
    case SET_INFOS:
      return {
        ...state,
        techInfos: action.payload
      }
    default: 
      return state;
  }
}
