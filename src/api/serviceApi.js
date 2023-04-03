import axios from "axios";
// import { Task, User } from "src/types";

const apiProduct = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  },
});


export const getProduct = () => {
    return apiProduct.get(`/dataProduct`)
};


export const signUp = (user) => {
    return apiProduct.post(`/login`, user)
};

export const createUser = (user) => {
    return apiProduct.post(`/register`, user)
};

export const searchProduct = (data) =>{
  return apiProduct.get(`/dataProduct?name_like=${data}`)
};