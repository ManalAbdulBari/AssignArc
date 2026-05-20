import { useParams } from "react-router-dom";

function AssignmentDetail() {

const { id } = useParams();

const assignment={

title:"Cloud Computing Project",

course:"Cloud Computing",

deadline:"25 May 2026",

teacher:"Dr. Muhammad Ibrar",

description:
"Build AssignArc cloud based assignment management system using Firebase and React."

};

return(

<div>

<h1 className="page-title">

Assignment Details

</h1>

<div className="card">

<h2>

{assignment.title}

</h2>

<div className="assignment-info">

<p>

<strong>
Assignment ID:
</strong>

{id}

</p>

<p>

<strong>
Course:
</strong>

{assignment.course}

</p>

<p>

<strong>
Teacher:
</strong>

{assignment.teacher}

</p>

<p>

<strong>
Deadline:
</strong>

{assignment.deadline}

</p>

</div>

<div
className="assignment-description"
>

<h3>

Description

</h3>

<p>

{assignment.description}

</p>

</div>

<button
className="primary-btn"
>

Upload Submission

</button>

</div>

</div>

);

}

export default AssignmentDetail;