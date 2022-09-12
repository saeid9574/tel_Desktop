import {createSlice} from "@reduxjs/toolkit" ;
const initialState = {
    message : []
}
export const MessageSlice = createSlice({
    name : 'message' ,
    initialState ,
    reducers : {
        ACTION_ADD_MESSSAGE : (state , action) => {
            state.message.push(action.payload) ;
        }
    }
})
export const {ACTION_ADD_MESSSAGE} = MessageSlice.actions ;
export default MessageSlice.reducer ;