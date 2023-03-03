import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Reducer from "./Reducer";

const Con=createContext();
const initial={
    query:'',
    data:[]
}
const Provider=({children})=>{
    const navigate=useNavigate()
const [state,dispatch]=useReducer(Reducer,initial);
    const Fetch=async(e)=>{
        e.preventDefault()
        const dataFetch = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=AIzaSyBaCp80cPXaQkeoPDmd9BdNvt5YcxrZ5p4&cx=a7c3547aa50b342b2&q=${state.query}}`
        );
        const res = await dataFetch.json();
        navigate('/result')
        console.log(res)
        dispatch({type:"FETCH",payload:res});
    }
    const Change=(e)=>{
        state.query=e.target.value;
}
    return <Con.Provider value={{...state,Change,Fetch}}>
        {children}
    </Con.Provider>
}
export {Con,Provider}
