import AssignmentTable

from "../../components/student/AssignmentTable";

import Loader

from "../../components/common/Loader";

import useAssignments

from "../../hooks/useAssignments";

function Assignments(){

const {

assignments,

loading,

error

}

=

useAssignments();

if(

loading

){

return(

<Loader

text="Loading Assignments..."

/>

);

}

if(

error

){

return(

<div
className="card"
>

<p>

{error}

</p>

</div>

);

}

return(

<div>

<h1
className="page-title"
>

Assignments

</h1>

<div
className="card"
>

<p>

View available assignments and upload your work.

</p>

</div>

<AssignmentTable

assignments={assignments}

/>

</div>

);

}

export default Assignments;