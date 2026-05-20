import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Signup() {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const signup=async()=>{

try{

await createUserWithEmailAndPassword(
auth,
email,
password
)

alert("Account Created Successfully")

}

catch(error){

alert(error.message)

}

}

return(

<div>

<h1>AssignArc Signup</h1>

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

<button onClick={signup}>
Signup
</button>

</div>

)

}

export default Signup;