import axios from  "axios"


//criando uma base url, no moneto que crio esse objeto eu já colooc com base a url que vou usar 
export const api = axios.create({
    baseURL : "https://www.omdbapi.com",
})

export const api_pos_cadastro = axios.create({
    baseURL : "https://608850faa6f4a3001742632f.mockapi.io/api/v1/user",
})