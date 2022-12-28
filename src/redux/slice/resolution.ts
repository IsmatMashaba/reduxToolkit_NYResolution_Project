import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Resolution from "../../types/type";

type InitialState = {
   resolutionList: Resolution[]
}
const initialState:InitialState = {
    resolutionList: []
}

const resolutionSlice= createSlice({
    name: 'resolution',
    initialState,
    reducers: {
        addResolution: (state,action:PayloadAction<Resolution>)=>{
         //action.payload : {}
            state.resolutionList.push(action.payload)

            // action.payload= userInput
            //userInput= Resolution
        }
    }
})
//actions, reducer

export const actions = resolutionSlice.actions
 const reducer=resolutionSlice.reducer
export default reducer
