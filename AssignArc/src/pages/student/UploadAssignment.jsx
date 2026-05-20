import {

useState

}

from "react";

import {

auth

}

from "../../firebase/firebase";

import {

uploadAssignment

}

from "../../services/uploadService";

import Loader

from "../../components/common/Loader";

function UploadAssignment(){

const [title,setTitle]=

useState("");

const [course,setCourse]=

useState("");

const [file,setFile]=

useState(null);

const [loading,setLoading]=

useState(false);

const allowedTypes=[

"application/pdf",

"application/msword",

"application/vnd.openxmlformats-officedocument.wordprocessingml.document",

"image/png",

"image/jpeg"

];

const handleFile=(e)=>{

const selected=

e.target.files[0];

if(

!selected

){

return;

}

if(

!allowedTypes.includes(

selected.type

)

){

alert(

"Only PDF, DOC, DOCX, PNG, JPG allowed"

);

return;

}

if(

selected.size>

5*1024*1024

){

alert(

"File size must be under 5MB"

);

return;

}

setFile(

selected

);

};

const handleSubmit=

async(e)=>{

e.preventDefault();

if(

!auth.currentUser

){

alert(

"Login required"

);

return;

}

if(

!title||

!course||

!file

){

alert(

"Fill all fields"

);

return;

}

try{

setLoading(true);

await uploadAssignment(

file,

title,

course,

auth.currentUser.uid

);

alert(

"Assignment Uploaded Successfully"

);

setTitle("");

setCourse("");

setFile(null);

}

catch(error){

alert(

error.message

);

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

text="Uploading Assignment..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Upload Assignment

</h1>

<div className="card">

<form

className="upload-form"

onSubmit={handleSubmit}

>

<input

type="text"

placeholder="Assignment Title"

value={title}

onChange={(e)=>{

setTitle(

e.target.value

);

}}

/>

<input

type="text"

placeholder="Course Name"

value={course}

onChange={(e)=>{

setCourse(

e.target.value

);

}}

/>

<input

type="file"

onChange={handleFile}

/>

{

file&&(

<p>

Selected:

{file.name}

</p>

)

}

<button
className="primary-btn"
>

Upload Assignment

</button>

</form>

</div>

</div>

);

}

export default UploadAssignment;