import { useState } from "react";

function UploadAssignment() {

const [title,setTitle]=useState("");
const [course,setCourse]=useState("");
const [deadline,setDeadline]=useState("");

const handleSubmit=(e)=>{

e.preventDefault();

if(!title||!course||!deadline){

alert("Fill all fields");

return;

}

alert("Assignment Uploaded");

setTitle("");
setCourse("");
setDeadline("");

};

return(

<div>

<h1 className="page-title">

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
onChange={(e)=>setTitle(e.target.value)}
/>

<input
type="text"
placeholder="Course Name"
value={course}
onChange={(e)=>setCourse(e.target.value)}
/>

<input
type="date"
value={deadline}
onChange={(e)=>setDeadline(e.target.value)}
/>

<button
className="primary-btn"
>

Upload

</button>

</form>

</div>

</div>

);

}

export default UploadAssignment;