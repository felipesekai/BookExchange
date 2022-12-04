import Axios from 'axios'
import {BooksModel} from "../utils/@Types";

export const api = Axios.create({
    baseURL: "http://127.0.0.1:8080/api"
})

