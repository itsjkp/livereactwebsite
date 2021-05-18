import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Decrement,Increment,addList,removeList} from '../actions/index'
const Redux = () => {
    const [input, setInput] = useState('')
    const myState = useSelector(state => state.upDown)
    const toDoState = useSelector(state => state.ToDo)
    const dispatch = useDispatch();
    const numInc = ()=>{
        dispatch(Increment())
    }

    const numDec = ()=>{
        dispatch(Decrement())
    }

    const inputval = (event)=>{
        let val = event.target.value;
        setInput(val)
    }

    const AddItem = ()=>{
        dispatch(addList(input))
        setInput('')
    }
    const RemoveItem = (event)=>{
        let listVal = event.target.id
        dispatch(removeList(listVal))
    }
    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(toDoState))
    },[toDoState])
    return (
        <>
        {/* <div>
            <button onClick={numDec}>-</button>
            <input type="text" value={myState}/>
            <button onClick={numInc}>+</button>
        </div> */}
        <div>
            <input type="text" value={input} onChange={inputval}/>
            <button onClick={AddItem}>Add Item</button>
            <ul>
                {
                    toDoState.map((currVal,index,arr)=>{
                        return (

                            <div key={index}>
                            <li>{currVal}</li>
                            <button onClick={RemoveItem} id={currVal}>del</button>
                            </div>

                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Redux
