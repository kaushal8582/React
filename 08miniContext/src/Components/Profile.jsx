import React,{useContext} from 'react'
import USerContext from '../Context/UserContext'

function Profile() {

    const {user}  = useContext(USerContext);

    if(!user) return <div>Please Login</div>

    if(user) return <div>Welcome : {user.userName}</div>

}

export default Profile
