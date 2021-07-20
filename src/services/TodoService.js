import axios from 'axios'

const mainAPICall = axios.create({
    baseURL: 'https://my-json-server.typicode.com/jshields123/json-server',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    }
})

export default {
    getTodos(){
        return mainAPICall.get('/todos')
    }
}