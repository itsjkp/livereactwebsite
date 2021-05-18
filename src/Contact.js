import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Contact = () => {

    const [error, setstate] = useState({})
    const [emailVal, setEmail] = useState('')
    const [passwordVal, setPassword] = useState('')
    const formSubmit = (event)=>{
        event.preventDefault();
        let errorObj = {};
        
        if(passwordVal == ''){
            errorObj = {password:'Password Required!'}
        }else{
            errorObj = {...errorObj,password:''}
        }
        if(emailVal == ''){
            errorObj = {...errorObj,email:'Email Required!'}
        }else{
            errorObj = {...errorObj,email:''}
        }
        setstate(errorObj)
    }

    const inputValue = (event)=>{
        let name = event.target.name;
        if(name == 'email'){
            setEmail(event.target.value)
        }else if(name == 'password'){
            setPassword(event.target.value)
        } 
    }
    // console.log(error)
    return (
        <div className="container">
            <div className="col-md-6">
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Enter email" 
                        name="email" 
                        value={emailVal} 
                        onChange={inputValue} />
                        <small className="form-text text-muted text-danger">{error.email?error.email:''}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password" 
                        name="password"
                        value={passwordVal} 
                        onChange={inputValue}
                         />
                        <small className="form-text text-muted text-danger">{error.password?error.password:''}</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
