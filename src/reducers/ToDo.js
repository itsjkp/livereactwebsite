const getStorage = ()=>{
    let items = localStorage.getItem("list")
    return (
        JSON.parse(items)
    )
}
const initialState = getStorage();
const ToDo = (state=initialState,action)=>{
    switch(action.type){
        case "add": return (
            [...state,action.inputval]
        )
        case "remove": return (
            state.filter((currVal,index,arr)=>{
                return currVal !== action.key
            })
        ) 
        default: return state
    }
}

export default ToDo;