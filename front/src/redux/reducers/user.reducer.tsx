import { FETCH_USERS, SET_ADDINFOSUSER, SET_INDEXOFUSERS, SET_LINKLIST, SET_UPDATEUSER, SET_USER } from "../actions/user.action";
import { SET_PUTMANSERVICESINFOS, SET_INFRATEC2INFOS} from "../actions/user.action";
import { UserElectricSkillsModel, UserStoreModel } from "../../components/reusable/userForm";

const initialState = {
  user: [] as UserStoreModel[],
  users: [{}],
  userToFindInUsers: -1,
  link: 'dashboard',
  infratec2StatsUser: {
    checksonnel: 0,
    skillsExplorer: 0,
    cartoSkills: 0,
    mapSkills: 0,
    skillsnetwork: 0,
    skillBook: 0,
  },  
  putmanServicesStatsUser: {
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
  }, 
};

export default function userReducer(state= initialState, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, 
        user: action.payload
      }
    case SET_PUTMANSERVICESINFOS:
      return {
        ...state,
        putmanServicesStatsUser: action.payload
      }
    case SET_INFRATEC2INFOS:
      return {
        ...state,
        infratec2StatsUser: action.payload
      }
    case SET_INDEXOFUSERS:
      return {
        ...state,
        userToFindInUsers: action.payload
      }
    case SET_LINKLIST:
      return {
        ...state,
        link: action.payload
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
