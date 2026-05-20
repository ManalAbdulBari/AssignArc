import {

useEffect,
useState

}

from "react";

import {

collection,
getDocs,
query,
orderBy

}

from "firebase/firestore";

import {

db

}

from "../../firebase/firebase";

import Loader

from "../../components/common/Loader";

import SubmissionTable

from "../../components/teacher/SubmissionTable";

function StudentSubmissions(){

const [submissions,setSubmissions]=

useState([]);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

loadSubmissions();

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

const handleDownload=

(url)=>{

if(

!url

){

alert(

"File not found"

);

return;

}

window.open(

url,

"_blank"

);

};

if(

loading

){

return(

<Loader

text="Loading Student Submissions..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Student Submissions

</h1>

{

submissions.length===0

?

<div
className="card"
>

<h3>

No Submissions Found

</h3>

<p>

Student uploads will appear here.

</p>

</div>

:

<SubmissionTable

submissions={submissions}

onDownload={handleDownload}

/>

}

</div>

);

}

export default StudentSubmissions;