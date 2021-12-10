import axios from "axios";

export const GET_USER = "GET_USER";
export const SAY_HELLO = "SAY_HELLO";

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

