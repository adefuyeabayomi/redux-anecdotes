import { createSlice } from "@reduxjs/toolkit";

let notificationSlice = createSlice({
    name : "notification",
    initialState : {message : "Save Inspiring, funny and philosophical anecdotes here", show : true},
    reducers : {
        updateNotification : function (state, action){
            state.message = action.payload
        },
        updateShowNotification : function (state,action){
            state.show = action.payload
        }
    }
})

export const {updateNotification,updateShowNotification} = notificationSlice.actions
export default notificationSlice.reducer
