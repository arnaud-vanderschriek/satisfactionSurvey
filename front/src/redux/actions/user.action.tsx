import axios from "axios";
import { ValuesTechForm } from "../../components/reusable/techForm";

export const GET_USER = "GET_USER";
export const SET_INFOS = "SET_INFOS";

export const getUser = (uid: string) => {
  return (dispatch: any) => {
    console.log('id in getUser actions: ', uid)
    return axios
    .get(`${process.env.REACT_APP_API_URL}/api/user/${uid}`)
    .then((res) => {
      console.log('res: ', res)
      dispatch({ type: GET_USER, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}

export const setTechInfos = (data: ValuesTechForm[]) => {
  return (dispatch: any) => {
    dispatch({ type: SET_INFOS, payload: data})
  }
}


