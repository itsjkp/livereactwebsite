import React from 'react'
import {useArray} from 'react-hanger'
const ToDo = () => {
    const todos = useArray(["hi,there","sup","world"])
    //console.log(todos)
    return (
        <div>
            <h3>ToDos</h3>
            <button onClick={()=>{
                todos.add(Math.random())
            }}>add</button>

            <ul>
                {todos.value.map((todo,i)=>{
                   return <li key={i}>
                        {todo}
                        <button onClick={()=>{
                            todos.removeIndex(i)
                        }}>delete</button>
                    </li>
                })}
            </ul>
            <button onClick={todos.clear}>clear todos</button>
        </div>
    )
}

export default ToDo
