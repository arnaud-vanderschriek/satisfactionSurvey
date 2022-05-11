import { 
  FETCH_USERS, 
  SET_ADDINFOSUSER, 
  SET_INDEXOFUSERS, 
  SET_INFRATEC2STATS, 
  SET_LINKLIST, 
  SET_PUTMANSERVICESSTATS, 
  SET_UPDATEUSER, 
  SET_USER, 
  SET_USEREVAL, 
  RESET_STATE, 
  RESET_SPEFIC_STATE 
} from "../actions/user.action";
import { UserElectricSkillsModel, UserStoreModel } from "../../components/reusable/userForm";

const initialState = {
  user: [] as UserStoreModel[],
  users: [{}],
  userEval: {} as UserStoreModel,
  userToFindInUsers: -1,
  link: 'dashboard',
  infratec2Stats: {
    checkSonnel: 0,
    skillsExplorer: 0,
    cartoSkills: 0,
    mapSkills: 0,
    skillsNetwork: 0,
    skillsBook: 0,
  },  
  putmanServicesStats: {
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
    case SET_USEREVAL:
      return {
        ...state,
        userEval: action.payload
      }
    case SET_PUTMANSERVICESSTATS:
      return {
        ...state,
        putmanServicesStats: action.payload
      }
      case SET_INFRATEC2STATS:
      return {
        ...state,
        infratec2Stats: action.payload
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
    case RESET_STATE:
      return initialState
    
    case RESET_SPEFIC_STATE:
      return {
        ...state,
        userEval: {} as UserStoreModel,
        infratec2Stats: {
          checkSonnel: 0,
          skillsExplorer: 0,
          cartoSkills: 0,
          mapSkills: 0,
          skillsNetwork: 0,
          skillsBook: 0,
        },
        putmanServicesStats: {
          manoeuvre: 0,
          electricPlan: 0,
          electricBox: 0,
          cable: 0,
          plug: 0,
          buildingPlan: 0,
        } as UserElectricSkillsModel,
      }
    default: 
      return state;
  }
}
