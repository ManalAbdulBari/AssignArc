import { Link } from "react-router-dom";

function Assignments() {

const assignments=[

{

id:1,

title:"Cloud Computing Project",

course:"Cloud Computing",

deadline:"25 May 2026",

status:"Pending"

},

{

id:2,

title:"Software Requirement Report",

course:"Software Engineering",

deadline:"28 May 2026",

status:"Submitted"

},

{

id:3,

title:"Database Final Assignment",

course:"Database Systems",

deadline:"30 May 2026",

status:"Pending"

}

];

return(

<div>

<div className="assignment-header">

<h1 className="page-title">

Assignments

</h1>

<Link
to="/upload"
>

<button
className="primary-btn"
>

Upload Assignment

</button>

</Link>

</div>

<div className="card">

<table
className="table"
>

<thead>

<tr>

<th>

Title

</th>

<th>

Course

</th>

<th>

Deadline

</th>

<th>

Status

</th>

<th>

Action

</th>

</tr>

</thead>

<tbody>

{

assignments.map(

(item)=>(

<tr
key={item.id}
>

<td>

{item.title}

</td>

<td>

{item.course}

</td>

<td>

{item.deadline}

</td>

<td>

<span

className={

`status ${item.status.toLowerCase()}`

}

>

{item.status}

</span>

</td>

<td>

<Link

to={`/assignment/${item.id}`}

>

<button

className="view-btn"

>

View

</button>

</Link>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</div>

);

}

export default Assignments;