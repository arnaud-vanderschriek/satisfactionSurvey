import { SET_USER } from "../actions/user.action";
import { SET_INFOS } from "../actions/user.action";
import { UserStoreModel } from "../../components/reusable/userForm";

const initialState = {
  user: {} as UserStoreModel,
  techInfos: [
    {name:"Manoeuvre", value: 0},
    {name: "Plan éléctrique", value: 0},
    {name: "Pose de tableau", value: 0},
    {name: "Tirage de cable", value: 0},
    {name: "Prises", value: 0},
    {name: "Plan", value: 0}
  ],  
};

export default function userReducer(state= initialState, action: any) {
  switch (action.type) {
    case SET_USER:
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
