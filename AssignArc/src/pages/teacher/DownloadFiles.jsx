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

function DownloadFiles(){

const [files,setFiles]=

useState([]);

const [loading,setLoading]=

useState(true);

useEffect(()=>{

loadFiles();

},[]);

const loadFiles=

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

setFiles(

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

text="Loading Files..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Download Files

</h1>

{

files.length===0

?

<div
className="card"
>

<h3>

No Files Available

</h3>

<p>

Student uploads will appear here.

</p>

</div>

:

<SubmissionTable

submissions={files}

onDownload={handleDownload}

/>

}

</div>

);

}

export default DownloadFiles;