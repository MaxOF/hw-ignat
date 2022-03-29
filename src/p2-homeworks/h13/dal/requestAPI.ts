import axios from "axios";

export const requestAPI = {
    requestPost (success: boolean) {
      return axios.post<any>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}
