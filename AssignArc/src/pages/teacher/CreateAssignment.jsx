import {

useState

}

from "react";

import {

createAssignment

}

from "../../services/assignmentService";

import Loader

from "../../components/common/Loader";

function CreateAssignment(){

const [title,setTitle]=

useState("");

const [course,setCourse]=

useState("");

const [description,setDescription]=

useState("");

const [deadline,setDeadline]=

useState("");

const [loading,setLoading]=

useState(false);

const today=

new Date()

.toISOString()

.split("T")[0];

const handleCreate=

async(e)=>{

e.preventDefault();

if(

!title||

!course||

!description||

!deadline

){

alert(

"Please fill all fields"

);

return;

}

if(

deadline<today

){

alert(

"Deadline cannot be past date"

);

return;

}

try{

setLoading(true);

await createAssignment({

title,

course,

description,

deadline,

status:"Active"

});

alert(

"Assignment Created Successfully"

);

setTitle("");

setCourse("");

setDescription("");

setDeadline("");

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

text="Creating Assignment..."

/>

);

}

return(

<div className="page-container">

<h1>

Create Assignment

</h1>

<div className="card">

<form

className="upload-form"

onSubmit={handleCreate}

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

placeholder="Assignment Description"

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

min={today}

onChange={(e)=>{

setDeadline(

e.target.value

);

}}

/>

<button

className="primary-btn"

>

Create Assignment

</button>

</form>

</div>

</div>

);

}

export default CreateAssignment;