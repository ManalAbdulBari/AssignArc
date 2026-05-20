import { useState } from "react";

function AssignmentForm({

onSubmit,

loading=false

}){

const [title,setTitle]=

useState("");

const [course,setCourse]=

useState("");

const [description,setDescription]=

useState("");

const [deadline,setDeadline]=

useState("");

const handleSubmit=(e)=>{

e.preventDefault();

if(

!title||

!course||

!description||

!deadline

){

alert(

"Fill all fields"

);

return;

}

onSubmit({

title,

course,

description,

deadline,

status:"Active"

});

setTitle("");

setCourse("");

setDescription("");

setDeadline("");

};

return(

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

<textarea

placeholder="Description"

value={description}

onChange={(e)=>{

setDescription(

e.target.value

);

}}

rows="4"

/>

<input

type="date"

value={deadline}

onChange={(e)=>{

setDeadline(

e.target.value

);

}}

/>

<button

className="primary-btn"

disabled={loading}

>

{

loading

?

"Creating..."

:

"Create Assignment"

}

</button>

</form>

</div>

);

}

export default AssignmentForm;