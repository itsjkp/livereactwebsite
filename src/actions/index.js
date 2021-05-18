export const Increment = ()=>{
    return (
        {
            type: "increment"
        }
    )
}

export const Decrement = ()=>{
    return (
        {
            type: "decrement"
        }
    )
}


export const addList = (inputval)=>{
    return (
        {
            type: "add",
            inputval
        }
    )
}

export const removeList = (key)=>{
    return (
        {
            type: "remove",
            key
        }
    )
}
