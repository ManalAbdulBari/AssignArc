import {

useNavigate

}

from "react-router-dom";

import {

logoutUser

}

from "../../services/authService";

function Navbar({

role="Portal",

onProfile

}){

const navigate=

useNavigate();

const handleLogout=

async()=>{

try{

await logoutUser();

navigate("/");

}

catch(error){

alert(

error.message

);

}

};

return(

<div className="navbar">

<div>

<h3>

AssignArc

</h3>

</div>

<div className="navbar-right">

<div className="user-box">

<span>

{role}

</span>

</div>

<button

className="profile-btn"

onClick={onProfile}

>

Profile

</button>

<button

className="logout-btn"

onClick={handleLogout}

>

Logout

</button>

</div>

</div>

);

}

export default Navbar;