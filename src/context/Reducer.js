const Reducer=(state,action)=>{
    switch(action.type){
        case "FETCH":{
            return {
                ...state,
                data:action.payload
            }
        }
    }

}
export default Reducer;