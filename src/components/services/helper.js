import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
    baseURL: BASE_URL,
});

export const toCamelCase =(word)=>{
    let words = word.slice(1)
    let newWord = words[0].toUpperCase()+words[1].toLowerCase()
    return newWord
}