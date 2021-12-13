import { GET_USER } from "../actions/user.action";
import { SET_INFOS } from "../actions/user.action";

const initialState = {
  test: 'Caca',
  techInfos: [
    {name: "A", value: 0, bool: false},
    {name: "B", value: 0, bool: false},
    {name: "C", value: 0, bool: false}
  ],  
};

export default function userReducer(state= initialState, action: any) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state, 
        test: action.payload
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
