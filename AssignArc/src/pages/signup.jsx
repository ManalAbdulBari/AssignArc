import { useState } from "react";
import { signupUser } from "../services/authService";

function Signup(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [loading,setLoading]=useState(false)

const signup=async()=>{

if(!email||!password){

alert("Fill all fields")
return

}

try{

setLoading(true)

await signupUser(
email,
password
)

alert("Account Created Successfully")

setEmail("")
setPassword("")

}

catch(error){

alert(error.message)

}

finally{

setLoading(false)

}

}

return(

<div className="auth-container">

<div className="auth-box">

<h1>
Create Account
</h1>

<p>
Create your AssignArc account
</p>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="primary-btn"
onClick={signup}
>

{loading?"Creating...":"Signup"}

</button>

</div>

</div>

)

}

export default Signup;