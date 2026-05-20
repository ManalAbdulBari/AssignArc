import {
useState,
useEffect
} from "react";

import {
Link,
useNavigate
} from "react-router-dom";

import {
loginUser
} from "../../services/authService";

import useAuth from "../../hooks/useAuth";

import Loader from "../../components/common/Loader";

function Login(){

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [loading,setLoading]=useState(false);

const navigate=useNavigate();

const {
user,
role
}=useAuth();

useEffect(()=>{

if(!user)return;

if(role==="admin"){

navigate("/admin");

}

else if(role==="teacher"){

navigate("/teacher");

}

else if(role==="student"){

navigate("/student");

}

},[
user,
role,
navigate
]);

const handleLogin=async()=>{

if(!email||!password){

alert(
"Please fill all fields"
);

return;

}

try{

setLoading(true);

const result=
await loginUser(
email,
password
);

alert(
"Login Successful"
);

if(result.role==="admin"){

navigate("/admin");

}

else if(
result.role==="teacher"
){

navigate("/teacher");

}

else{

navigate("/student");

}

}

catch(error){

if(
error.code===
"auth/invalid-credential"
){

alert(
"Invalid email or password"
);

}

else{

alert(
error.message
);

}

}

finally{

setLoading(false);

}

};

if(loading){

return(

<Loader
text="Logging In..."
/>

);

}

return(

<div className="auth-container">

<div className="auth-box">

<h1>

AssignArc Login

</h1>

<p>

Welcome Back

</p>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>{

setEmail(
e.target.value
);

}}

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>{

setPassword(
e.target.value
);

}}

onKeyDown={(e)=>{

if(
e.key==="Enter"
){

handleLogin();

}

}}

 />

<button

className="primary-btn"

onClick={handleLogin}

>

Login

</button>

<p>

No account?

<Link to="/signup">

Signup

</Link>

</p>

</div>

</div>

);

}

export default Login;