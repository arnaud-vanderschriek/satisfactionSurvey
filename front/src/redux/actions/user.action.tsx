import axios from "axios";
import { ValuesTechForm } from "../../components/reusable/techForm";
import { UserStoreModel } from "../../components/reusable/userForm";

export const SET_USER = "GET_USER";
export const SET_USEREVAL = "SET_USEREVAL";
export const SET_PUTMANSERVICESINFOS = "SET_PUTMANSERVICESINFOS";
export const SET_ISFETCHING = "SET_ISFETCHING";
export const SET_INFRATEC2INFOS = "SET_INFRATEC2INFOS";
export const SET_PUTMANSERVICESSTATS = "SET_PUTMANSERVICESSTATS ";
export const SET_INFRATEC2STATS = "SET_INFRATEC2STATS";
export const SEND_INFOS = "SEND_INFOS";
export const SET_INDEXOFUSERS = "SET_INDEXOFUSERS";
export const SET_LINKLIST = "SET_LINKLIST";
export const IS_FETCHED = "IS_FETCHED";
export const SET_ADDINFOSUSER = "ADDINFOSUSER";
export const SET_UPDATEUSER = "UPDATEUSER";
export const FETCH_USERS = "FETCHUSERS";
export const FETCH_DATASWORKERS = "FETCH_DATASWORKERS";
export const RESET_STATE = "RESET_STATE";
export const RESET_SPEFIC_STATE = "RESET_SPEFIC_STATE";

export const SetUser = (data: UserStoreModel) => {
  return (dispatch: any) => {
    dispatch({type: SET_USER, payload: data})
  }
}

export const SetUserEval = (data: UserStoreModel) => {
  return (dispatch: any) => {
    dispatch({type: SET_USEREVAL, payload: data})
  }
}

export const setPutmanServicesStats = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_PUTMANSERVICESSTATS, payload: data})
  }
}

export const setInfractec2Stats = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_INFRATEC2STATS, payload: data})
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

export const setIsFetching = (data: any) => {
  return (dispatch: any) => {
    dispatch({type: SET_ISFETCHING, payload: data})
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
    setIsFetching(true)
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/getAllUsers`)
    .then(res => {
      dispatch({type: FETCH_USERS, payload: res.data})
      setIsFetching(true)
    })
    .catch(errors => {
      const errorsMsg = errors.message
      console.log(errorsMsg)
    }) 
    setIsFetching(true)   
  }
}

export const fetchDatasTechFormWorkers = () => {
  return (dispatch: any) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/user/getDatasWorkers`)
    .then(res => {
      dispatch({type: FETCH_DATASWORKERS, payload: res.data})
    })
    .catch(errors => {
      console.log(errors)
    })
  }
}

export const logOut = () => {
  return (dispatch: any) => {
    dispatch({type: RESET_STATE,})
  }
}

export const resetState = () => {
  return (dispatch: any) => {
    dispatch({type: RESET_SPEFIC_STATE})
  }
}

