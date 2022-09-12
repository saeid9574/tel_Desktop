import {useState} from "react";

export const useChange = (initialState) => {
    const [val , setValue] = useState(initialState) ;
    const change = e => {
        const {value} = e.target
        setValue(value)
    }
    const reset = () => setValue('') ;
    return [
        val ,
        change ,
        reset
    ]
}