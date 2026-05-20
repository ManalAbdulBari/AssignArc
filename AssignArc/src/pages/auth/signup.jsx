import {

useState,
useEffect

}

from "react";

import {

useNavigate,
Link

}

from "react-router-dom";

import {

signupUser

}

from "../../services/authService";

import useAuth

from "../../hooks/useAuth";

import Loader

from "../../components/common/Loader";

function Signup(){

const [email,setEmail]=

useState("");

const [password,setPassword]=

useState("");

const [confirmPassword,setConfirmPassword]=

useState("");

const [role,setRole]=

useState("student");

const [loading,setLoading]=

useState(false);

const navigate=

useNavigate();

const {

user

}=useAuth();

useEffect(()=>{

if(

user

){

navigate("/student");

}

},[

user,
navigate

]);

const signup=

async()=>{

if(

!email||

!password||

!confirmPassword

){

alert(

"Fill all fields"

);

return;

}

if(

password.length<6

){

alert(

"Password minimum 6 characters"

);

return;

}

if(

password!==confirmPassword

){

alert(

"Passwords do not match"

);

return;

}

try{

setLoading(true);

await signupUser(

email,
password,
role

);

alert(

"Account Created Successfully"

);

navigate("/");

}

catch(error){

if(

error.code===

"auth/email-already-in-use"

){

alert(

"Email already exists"

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

if(

loading

){

return(

<Loader

text="Creating Account..."

/>

);

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

/>

<input

type="password"

placeholder="Confirm Password"

value={confirmPassword}

onChange={(e)=>{

setConfirmPassword(

e.target.value

);

}}

/>

<select

value={role}

onChange={(e)=>{

setRole(

e.target.value

);

}}

>

<option value="student">

Student

</option>

<option value="teacher">

Teacher

</option>

</select>

<button

className="primary-btn"

onClick={signup}

>

Signup

</button>

<p>

Already have account?

<Link to="/">

Login

</Link>

</p>

</div>

</div>

);

}

export default Signup;