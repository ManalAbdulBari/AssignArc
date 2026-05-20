import {
Link,
useNavigate
}
from "react-router-dom";

import {
useEffect,
useState
}
from "react";

import {
auth
}
from "../../firebase/firebase";

import Navbar
from "../../components/common/Navbar";

import Loader
from "../../components/common/Loader";

function StudentDashboard(){

const navigate=
useNavigate();

const [loading,setLoading]=
useState(true);

useEffect(()=>{

if(auth.currentUser){

setLoading(false);

}

else{

navigate("/");

}

},[]);

const handleLogout=()=>{

auth.signOut();

navigate("/");

};

if(loading){

return(

<Loader
text="Loading Dashboard..."
/>

);

}

return(

<>

<Navbar

role="Student Portal"

onProfile={()=>{

navigate("/profile");

}}

onLogout={handleLogout}

/>

<div className="dashboard-layout">

<div className="sidebar">

<h3>

Student Menu

</h3>

<Link
to="/student"
className="sidebar-link"
>

Dashboard

</Link>

<Link
to="/assignments"
className="sidebar-link"
>

Assignments

</Link>

<Link
to="/upload"
className="sidebar-link"
>

Upload Work

</Link>

<Link
to="/history"
className="sidebar-link"
>

Submission History

</Link>

<Link
to="/profile"
className="sidebar-link"
>

Profile

</Link>

</div>

<div className="dashboard-content">

<h1
className="page-title"
>

Student Dashboard

</h1>

<p
className="welcome-text"
>

Welcome back to AssignArc

</p>

<div className="card">

<h3>

Quick Actions

</h3>

<div
className="action-section"
>

<Link to="/assignments">

<button
className="primary-btn"
>

View Assignments

</button>

</Link>

<Link to="/upload">

<button
className="secondary-btn"
>

Upload Work

</button>

</Link>

</div>

</div>

<div
className="card"
>

<h3>

Recent Updates

</h3>

<p>

Check assignments and submit work before deadlines.

</p>

</div>

</div>

</div>

</>

);

}

export default StudentDashboard;