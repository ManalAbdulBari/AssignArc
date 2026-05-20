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

db

}

from "../../firebase/firebase";

import Loader

from "../../components/common/Loader";

import AnalyticsCard

from "../../components/teacher/AnalyticsCard";

function Reports(){

const [assignmentCount,setAssignmentCount]=

useState(0);

const [submissionCount,setSubmissionCount]=

useState(0);

const [pendingCount,setPendingCount]=

useState(0);

const [percentage,setPercentage]=

useState(0);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

loadReports();

},[]);

const loadReports=

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

collection(
db,
"submissions"
)

);

const totalAssignments=

assignmentSnapshot.size;

const totalSubmissions=

submissionSnapshot.size;

const totalPending=

Math.max(

0,

totalAssignments-totalSubmissions

);

const progress=

totalAssignments===0

?

0

:

Math.round(

(

totalSubmissions/

totalAssignments

)

*100

);

setAssignmentCount(

totalAssignments

);

setSubmissionCount(

totalSubmissions

);

setPendingCount(

totalPending

);

setPercentage(

progress

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

text="Loading Reports..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Reports

</h1>

<div
className="dashboard-grid"
>

<AnalyticsCard

title="Assignments"

value={assignmentCount}

subtitle="Created Assignments"

/>

<AnalyticsCard

title="Submissions"

value={submissionCount}

subtitle="Student Uploads"

/>

<AnalyticsCard

title="Pending"

value={pendingCount}

subtitle="Need Submission"

/>

<AnalyticsCard

title="Progress"

value={`${percentage}%`}

subtitle="Submission Completion"

/>

</div>

<div
className="card"
>

<h3>

System Summary

</h3>

<p>

Assignments:

{assignmentCount}

</p>

<p>

Submissions:

{submissionCount}

</p>

<p>

Pending:

{pendingCount}

</p>

<p>

Completion:

{percentage}%

</p>

</div>

</div>

);

}

export default Reports;