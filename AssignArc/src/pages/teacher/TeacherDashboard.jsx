import {
useEffect,
useState
}
from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import {
auth
}
from "../../firebase/firebase";

import Loader
from "../../components/common/Loader";

import Navbar
from "../../components/common/Navbar";

function TeacherDashboard(){

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

const handleLogout=async()=>{

await auth.signOut();

navigate("/");

};

if(loading){

return(

<Loader
text="Loading Teacher Dashboard..."
/>

);

}

return(

<>

<Navbar

role="Teacher Portal"

onProfile={()=>{

navigate("/profile");

}}

onLogout={handleLogout}

/>

<div className="dashboard-layout">

<div className="sidebar">

<h3>

Teacher Menu

</h3>

<Link
to="/teacher"
className="sidebar-link"
>

Dashboard

</Link>

<Link
to="/create"
className="sidebar-link"
>

Create Assignment

</Link>

<Link
to="/manage"
className="sidebar-link"
>

Manage Assignments

</Link>

<Link
to="/submissions"
className="sidebar-link"
>

Student Work

</Link>

<Link
to="/reports"
className="sidebar-link"
>

Reports

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

Teacher Dashboard

</h1>

<p
className="welcome-text"
>

Manage assignments and review student submissions.

</p>

<div className="dashboard-grid">

<Link
to="/create"
className="card action-card"
>

<h3>

Create Assignment

</h3>

<p>

Add new assignments

</p>

</Link>

<Link
to="/manage"
className="card action-card"
>

<h3>

Manage Assignments

</h3>

<p>

Update and organize tasks

</p>

</Link>

<Link
to="/submissions"
className="card action-card"
>

<h3>

Student Submissions

</h3>

<p>

Review uploaded work

</p>

</Link>

<Link
to="/reports"
className="card action-card"
>

<h3>

Reports

</h3>

<p>

Track student performance

</p>

</Link>

</div>

<div className="card">

<h3>

Teacher Activity

</h3>

<p>

Monitor submissions and keep assignments updated.

</p>

</div>

</div>

</div>

</>

);

}

export default TeacherDashboard;