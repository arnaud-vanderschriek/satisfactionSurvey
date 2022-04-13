import axios from "axios";
import { ValuesTechForm } from "../../components/reusable/techForm";
import { UserStoreModel } from "../../components/reusable/userForm";

export const SET_USER = "GET_USER";
export const SET_PUTMANSERVICESINFOS = "SET_PUTMANSERVICESINFOS";
export const SET_INFRATEC2INFOS = "SET_INFRATEC2INFOS";
export const SEND_INFOS = "SEND_INFOS";
export const SET_INDEXOFUSERS = "SET_INDEXOFUSERS";
export const SET_LINKLIST = "SET_LINKLIST";
export const SET_ADDINFOSUSER = "ADDINFOSUSER"
export const SET_UPDATEUSER = "UPDATEUSER"
export const FETCH_USERS = "FETCHUSERS"

export const SetUser = (data: UserStoreModel) => {
  return (dispatch: any) => {
    dispatch({type: SET_USER, payload: data})
  }
}

export const setPutmanServicesTechInfos = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_PUTMANSERVICESINFOS, payload: data})
  }
}

export const setInfratec2TechInfos = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_INFRATEC2INFOS, payload: data})
  }
}
export const setIndexOfUsers = (data: any) => {
  return (dispatch: any) => {
    dispatch({ type: SET_INDEXOFUSERS, payload: data})
  }
}
export const setLinkList = (data: any) => {
  return (dispatch: any) => {
    dispatch({type: SET_LINKLIST, payload: data})
  }
}

export const setAddInfosUser = (data: any) => {
  return (dispatch: any) => {
    dispatch({type: SET_ADDINFOSUSER, payload: data})
  }
}

export const setUpdateUser = (data: any) => {
  return (dispatch: any) => {
    dispatch({type: SET_UPDATEUSER, payload: data})
  }
}

export const fetchAllWorker = () => {
  return (dispatch: any) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/`)
    .then(res => {
      dispatch({type: FETCH_USERS, payload: res.data})
    })
    .catch(errors => {
      const errorsMsg = errors.message
      console.log(errorsMsg)
    })    
  }
}



