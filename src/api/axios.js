import axios from "axios";


export const apiConfig = axios.create({
    baseURL : "https://sheetdb.io/api/v1/"
})