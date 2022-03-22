import { FETCH_USERS, SET_ADDINFOSUSER, SET_UPDATEUSER, SET_USER } from "../actions/user.action";
import { SET_INFOS } from "../actions/user.action";
import { UserElectricSkillsModel, UserModelArray, UserStoreModel } from "../../components/reusable/userForm";

const initialState = {
  user: [] as UserStoreModel[],
  users: [{}],
  techInfos: [
    {name:"Manoeuvre", value: 0},
    {name: "Plan éléctrique", value: 0},
    {name: "Pose de tableau", value: 0},
    {name: "Tirage de cable", value: 0},  
    {name: "Prises", value: 0},
    {name: "Plan", value: 0}
  ],  
  techInfos2: {
    manoeuvre: 0,
    electricPlan: 0,
    electricBox: 0,
    cable: 0,
    plug: 0,
    buildingPlan: 0,
  } as UserElectricSkillsModel,

  additionalUserInfos: {
    address1: '',
    address2: '',
    city: '',
    country: '',
    postalCode: '',
    phoneNumber: '',
  }
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
        techInfos2: action.payload
      }
    case SET_ADDINFOSUSER:
      return {
        ...state,
        additionalUserInfos: action.payload
      }
    case SET_UPDATEUSER:
      return {
        ...state,
        user: action.payload
      }
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    default: 
      return state;
  }
}
