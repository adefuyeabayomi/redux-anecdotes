import { createSlice } from "@reduxjs/toolkit";
let anecdoteSlice = createSlice({
    name : "anecdote",
    initialState : [],
    reducers : {
        vote(state, action){
            state.map(x=>{
                x.id == action.payload ? x.votes++ : false;
                return x;
            })
        },
        add(state,action){
            state.push(action.payload)
        },
        setAnecdotes(state,action){
            console.log("anecdotes", action.payload);
            return action.payload
        }
    }
})

export const {vote, add, setAnecdotes} = anecdoteSlice.actions
const anecdoteReducer =  anecdoteSlice.reducer
export default anecdoteReducer