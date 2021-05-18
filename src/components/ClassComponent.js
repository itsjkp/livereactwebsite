import React from 'react'
import User from './User'
class ClassComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Jitendra",
            email: "itsjkp@gmail.com"
        }
    }

    componentDidMount(){
        this.setState({
            name: "jkp"
        })
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
        if(this.state.name == "jkp"){
            this.setState({
                name: "palji"
            })
        }
    }
    

    
    render(){
        return (
            <>
                <h1>My name is : {this.state.name}</h1>
                <h2>My email is : {this.state.email}</h2>
                <button onClick={()=>{this.setState({
                name: "delJitendra"
            })}}>Delete User</button>
                {
                    (this.state.name == "delJitendra")?'': <User />
                }
            </>
        )
    }
}

export default ClassComponent