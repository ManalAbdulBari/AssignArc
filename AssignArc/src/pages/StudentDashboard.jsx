import { Link } from "react-router-dom";

import Card from "../components/Card";

function StudentDashboard() {

const assignments = 5;

const submitted = 3;

const pending = 2;

return (

<div>

<h1 className="page-title">

Student Dashboard

</h1>

<div className="dashboard-grid">

<Card

title="Total Assignments"

value={assignments}

subtitle="Available assignments"

/>

<Card

title="Submitted"

value={submitted}

subtitle="Completed submissions"

/>

<Card

title="Pending"

value={pending}

subtitle="Need submission"

/>

</div>

<div className="card">

<h3>

Quick Actions

</h3>

<div className="action-section">

<Link
to="/assignments"
>

<button
className="primary-btn"
>

View Assignments

</button>

</Link>

<Link
to="/upload"
>

<button
className="secondary-btn"
>

Upload Work

</button>

</Link>

</div>

</div>

<div className="card">

<h3>

Submission Status

</h3>

<table
className="table"
>

<thead>

<tr>

<th>

Assignment

</th>

<th>

Status

</th>

<th>

Deadline

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Cloud Computing Project

</td>

<td>

Submitted

</td>

<td>

25 May

</td>

</tr>

<tr>

<td>

Database Assignment

</td>

<td>

Pending

</td>

<td>

28 May

</td>

</tr>

</tbody>

</table>

</div>

</div>

);

}

export default StudentDashboard;