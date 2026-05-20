import {

useEffect,
useState

}

from "react";

import {

getAssignments,
deleteAssignment

}

from "../../services/assignmentService";

import Loader

from "../../components/common/Loader";

function ManageAssignments(){

const [assignments,setAssignments]=

useState([]);

const [loading,setLoading]=

useState(true);

const [deleteLoading,setDeleteLoading]=

useState(null);

useEffect(()=>{

loadAssignments();

},[]);

const loadAssignments=

async()=>{

try{

const snapshot=

await getAssignments();

const data=

snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);

setAssignments(

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

const handleDelete=

async(id)=>{

const confirmDelete=

window.confirm(

"Delete assignment?"

);

if(

!confirmDelete

){

return;

}

try{

setDeleteLoading(id);

await deleteAssignment(id);

setAssignments(

prev=>

prev.filter(

(item)=>

item.id!==id

)

);

alert(

"Assignment Deleted"

);

}

catch(error){

alert(

error.message

);

}

finally{

setDeleteLoading(null);

}

};

if(

loading

){

return(

<Loader

text="Loading Assignments..."

/>

);

}

return(

<div>

<h1
className="page-title"
>

Manage Assignments

</h1>

{

assignments.length===0

?

<div
className="card"
>

<h3>

No Assignments Available

</h3>

<p>

Create assignments to manage them here.

</p>

</div>

:

assignments.map(

(item)=>(

<div

key={item.id}

className="card"

>

<h3>

{item.title}

</h3>

<p>

Course:

{

item.course||

"General"

}

</p>

<p>

{

item.description

}

</p>

<p>

Deadline:

{

item.deadline

}

</p>

<p>

Status:

{

item.status||

"Active"

}

</p>

<button

className="primary-btn"

onClick={()=>{

handleDelete(

item.id

);

}}

disabled={

deleteLoading===item.id

}

>

{

deleteLoading===item.id

?

"Deleting..."

:

"Delete"

}

</button>

</div>

)

)

}

</div>

);

}

export default ManageAssignments;