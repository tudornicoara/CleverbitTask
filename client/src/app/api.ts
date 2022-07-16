import axios, {AxiosResponse} from "axios";
import {LoginModel} from "./models/loginModel";

axios.defaults.baseURL = 'https://localhost:44337/api';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) config.headers!.Authorization = `Basic ${token}`;
    return config;
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody)
}

const Users = {
    login: (user: LoginModel) => requests.post<string>('/users/login', user)
}

const Random = {
    getRandomNumber: () => requests.get<number>('/random')
}

const agent = {
    Users,
    Random
}

export default agent;