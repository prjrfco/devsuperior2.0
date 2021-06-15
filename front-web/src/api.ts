import axios from "axios";

const API_URL = 'http://192.168.1.19:8080';

export function fetchProducts(){
    return axios(`${API_URL}/products`);
}