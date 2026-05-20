import {

useState

}

from "react";

import {

useNavigate

}

from "react-router-dom";

import {

auth

}

from "../../firebase/firebase";

import {

resetPassword,
logoutUser

}

from "../../services/authService";

function Settings(){

const navigate=

useNavigate();

const [resetLoading,setResetLoading]=

useState(false);

const [logoutLoading,setLogoutLoading]=

useState(false);

const handlePasswordReset=

async()=>{

if(

!auth.currentUser?.email

){

alert(

"No account found"

);

return;

}

try{

setResetLoading(true);

await resetPassword(

auth.currentUser.email

);

alert(

"Password reset email sent"

);

}

catch(error){

alert(

error.message

);

}

finally{

setResetLoading(false);

}

};

const handleLogout=

async()=>{

const confirmLogout=

window.confirm(

"Are you sure you want to logout?"

);

if(

!confirmLogout

){

return;

}

try{

setLogoutLoading(true);

await logoutUser();

navigate("/");

}

catch(error){

alert(

error.message

);

}

finally{

setLogoutLoading(false);

}

};

return(

<div>

<h1 className="page-title">

Settings

</h1>

<div className="card">

<h3>

Account Settings

</h3>

<p>

Email:

{

auth.currentUser?.email||

"Not Available"

}

</p>

<button

className="primary-btn"

onClick={handlePasswordReset}

disabled={resetLoading}

>

{

resetLoading

?

"Sending..."

:

"Reset Password"

}

</button>

</div>

<div
className="card"
style={{
marginTop:"20px"
}}
>

<h3>

Session

</h3>

<p>

Logout from current account

</p>

<button

className="secondary-btn"

onClick={handleLogout}

disabled={logoutLoading}

>

{

logoutLoading

?

"Logging Out..."

:

"Logout"

}

</button>

</div>

</div>

);

}

export default Settings;