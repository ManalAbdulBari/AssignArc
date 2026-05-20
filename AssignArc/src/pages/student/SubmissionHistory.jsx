import {

useEffect,
useState

}

from "react";

import {

collection,
query,
where,
getDocs,
orderBy

}

from "firebase/firestore";

import {

db,
auth

}

from "../../firebase/firebase";

import Loader

from "../../components/common/Loader";

function SubmissionHistory(){

const [submissions,setSubmissions]=

useState([]);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

if(

auth.currentUser

){

loadSubmissions();

}

},[]);

const loadSubmissions=

async()=>{

try{

const submissionRef=

collection(
db,
"submissions"
);

const q=

query(

submissionRef,

where(
"studentId",
"==",
auth.currentUser.uid
),

orderBy(
"submittedAt",
"desc"
)

);

const snapshot=

await getDocs(q);

const data=

snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);

setSubmissions(

data

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

text="Loading Submission History..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Submission History

</h1>

{

submissions.length===0

?

<div
className="card"
>

<p>

No submissions found

</p>

</div>

:

<div
className="card"
>

<table
className="table"
>

<thead>

<tr>

<th>

Assignment

</th>

<th>

Course

</th>

<th>

File

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{

submissions.map(

(item)=>(

<tr
key={item.id}
>

<td>

{

item.title

}

</td>

<td>

{

item.course||

"-"

}

</td>

<td>

<a

href={

item.fileUrl

}

target="_blank"

rel="noreferrer"

>

{

item.fileName||

"Open File"

}

</a>

</td>

<td>

<span
className="status submitted"
>

Submitted

</span>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

}

</div>

);

}

export default SubmissionHistory;