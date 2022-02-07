import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
})

export type postType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

type dataType = {
    success: boolean
}


export const requestAPI = {
    postRequest: (value: boolean) => {
       return  instance.post<postType, AxiosResponse<postType>, dataType>('/', {success: value})
    }
}