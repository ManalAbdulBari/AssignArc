import { Link } from "react-router-dom";

function AssignmentTable({ assignments }) {

return (

<div className="card">

<table className="table">

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

assignments.length===0?

(

<tr>

<td
colSpan="5"
className="empty-state"
>

No Assignments Found

</td>

</tr>

)

:

(

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

<div
className="action-buttons"
>

<Link

to={`/assignment/${item.id}`}

>

<button
className="view-btn"
>

View

</button>

</Link>

</div>

</td>

</tr>

)

)

)

}

</tbody>

</table>

</div>

);

}

export default AssignmentTable;