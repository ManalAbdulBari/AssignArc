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

collection,
getDocs,
query,
where

}

from "firebase/firestore";

import {

db,
auth

}

from "../../firebase/firebase";

import Card

from "../../components/common/Card";

import Navbar

from "../../components/common/Navbar";

import Loader

from "../../components/common/Loader";

function StudentDashboard(){

const navigate=

useNavigate();

const [assignments,setAssignments]=

useState(0);

const [submitted,setSubmitted]=

useState(0);

const [pending,setPending]=

useState(0);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

if(

auth.currentUser

){

loadDashboard();

}

else{

navigate("/");

}

},[]);

const loadDashboard=

async()=>{

try{

const assignmentSnapshot=

await getDocs(

collection(
db,
"assignments"
)

);

const submissionSnapshot=

await getDocs(

query(

collection(
db,
"submissions"
),

where(
"studentId",
"==",
auth.currentUser.uid
)

)

);

const totalAssignments=

assignmentSnapshot.size;

const totalSubmitted=

submissionSnapshot.size;

setAssignments(

totalAssignments

);

setSubmitted(

totalSubmitted

);

setPending(

Math.max(

0,

totalAssignments-totalSubmitted

)

);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};

const handleLogout=()=>{

navigate("/");

};

if(

loading

){

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

/>

<div className="main-content">

<h1 className="page-title">

Student Dashboard

</h1>

<div className="dashboard-grid">

<Card

title="Total Assignments"

value={assignments}

subtitle="Available Assignments"

/>

<Card

title="Submitted"

value={submitted}

subtitle="Completed Submissions"

/>

<Card

title="Pending"

value={pending}

subtitle="Need Submission"

/>

</div>

<div className="card">

<h3>

Quick Actions

</h3>

<div className="action-section">

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

<div className="card">

<div className="section-header">

<h3>

Submission Status

</h3>

<Link to="/history">

<button
className="primary-btn"
>

View All

</button>

</Link>

</div>

<p>

Submitted:

{submitted}

</p>

<p>

Pending:

{pending}

</p>

</div>

<div
className="card"
style={{
marginTop:"25px"
}}
>

<h3>

Recent Activity

</h3>

<p>

Assignments available:

{assignments}

</p>

<p>

Completed submissions:

{submitted}

</p>

</div>

</div>

</>

);

}

export default StudentDashboard;