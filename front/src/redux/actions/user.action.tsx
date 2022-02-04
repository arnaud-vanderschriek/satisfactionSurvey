import axios from "axios";
import { ValuesTechForm } from "../../components/reusable/techForm";
import { UserStoreModel } from "../../components/reusable/userForm";

export const SET_USER = "GET_USER";
export const SET_INFOS = "SET_INFOS";
export const SEND_INFOS = "SEND_INFOS";

export const SetUser = (data: UserStoreModel) => {
  return (dispatch: any) => {

  //   console.log('id in getUser actions: ', uid)
  //   return axios
  //   .get(`${process.env.REACT_APP_API_URL}/api/user/${uid}`)
  //   .then((res) => {
  //     console.log('res: ', res)
  //     dispatch({ type: GET_USER, payload: res.data })
  //   })
  //   .catch((err) => console.log(err))
  // }
    dispatch({type: SET_USER, payload: data})
  }
}

export const setTechInfos = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_INFOS, payload: data})
  }
}





