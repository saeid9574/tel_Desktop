import us1 from './../../assets/image/images1.jfif' ;
import us2 from './../../assets/image/images2.jfif' ;

import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    users : [
        {name : 'saeid' , num : '09147030642' , img : us1} ,
        {name : 'mohammad' , num : '09144536110' , img : us2} ,
    ]
}
export const userSlice = createSlice({
    name : 'user' ,
    initialState ,
    reducers : {
        ACTION_ADD_USER : (state,action) => {
            state.users.push(action.payload) ;
        }
    }
})
export const {ACTION_ADD_USER} = userSlice.actions ;
export default userSlice.reducer ;