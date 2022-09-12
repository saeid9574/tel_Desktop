import {configureStore} from "@reduxjs/toolkit" ;
import userSlice from './slice/userSlice' ;
import MessageSlice from './slice/messageSlice' ;

export const store = configureStore({
    reducer : {
        us : userSlice ,
        msg : MessageSlice
    }
})