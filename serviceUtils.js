import axios from "axios"

let baseUrl = "http://localhost:3001/anecdotes"
function getAll(){
    return axios.get(baseUrl)
}
function saveAnecdote(data){
    return axios.post(baseUrl,data)
}
export {getAll,saveAnecdote}

