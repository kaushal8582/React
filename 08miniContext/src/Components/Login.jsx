import React from 'react'
import { useState,useContext } from 'react'
import USerContext from '../Context/UserContext'

function Login() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const {setUser} = useContext(USerContext)

    const handelSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password});
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder='UserName' />
            <input type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password' />
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login
