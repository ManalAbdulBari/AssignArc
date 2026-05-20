import {

useEffect,
useState

}

from "react";

import {

collection,
getDocs

}

from "firebase/firestore";

import {

Link,
useNavigate

}

from "react-router-dom";

import {

db

}

from "../../firebase/firebase";

import AnalyticsCard

from "../../components/teacher/AnalyticsCard";

import Loader

from "../../components/common/Loader";

import Navbar

from "../../components/common/Navbar";

function TeacherDashboard(){

const navigate=

useNavigate();

const [assignments,setAssignments]=

useState(0);

const [submissions,setSubmissions]=

useState(0);

const [pending,setPending]=

useState(0);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

loadDashboard();

},[]);

const loadDashboard=

async()=>{

try{

const assignmentData=

await getDocs(

collection(
db,
"assignments"
)

);

const submissionData=

await getDocs(

collection(
db,
"submissions"
)

);

const totalAssignments=

assignmentData.size;

const totalSubmissions=

submissionData.size;

setAssignments(

totalAssignments

);

setSubmissions(

totalSubmissions

);

setPending(

Math.max(

0,

totalAssignments-totalSubmissions

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

if(

loading

){

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

/>

<div className="main-content">

<h1
className="page-title"
>

Teacher Dashboard

</h1>

<div
className="dashboard-grid"
>

<AnalyticsCard

title="Assignments"

value={assignments}

subtitle="Created Assignments"

/>

<AnalyticsCard

title="Submissions"

value={submissions}

subtitle="Student Uploads"

/>

<AnalyticsCard

title="Pending"

value={pending}

subtitle="Need Review"

/>

</div>

<div
className="dashboard-grid"
>

<Link
to="/create"
className="card"
>

<h3>

Create Assignment

</h3>

<p>

Add new assignment

</p>

</Link>

<Link
to="/manage"
className="card"
>

<h3>

Manage Assignments

</h3>

<p>

Edit and delete assignments

</p>

</Link>

<Link
to="/submissions"
className="card"
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
className="card"
>

<h3>

Reports

</h3>

<p>

View analytics

</p>

</Link>

</div>

</div>

</>

);

}

export default TeacherDashboard;