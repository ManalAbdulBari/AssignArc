function TeacherDashboard() {

return (

<div>

<h1 className="page-title">
Teacher Dashboard
</h1>

<div className="dashboard-grid">

<div className="card">

<h3>
Total Assignments
</h3>

<p>
15 Active Assignments
</p>

</div>

<div className="card">

<h3>
Pending Reviews
</h3>

<p>
8 Submissions Waiting
</p>

</div>

<div className="card">

<h3>
Students
</h3>

<p>
120 Registered Students
</p>

</div>

</div>

<div className="card">

<h3>
Recent Submissions
</h3>

<table className="table">

<thead>

<tr>

<th>
Student
</th>

<th>
Assignment
</th>

<th>
Status
</th>

</tr>

</thead>

<tbody>

<tr>

<td>
Ali Khan
</td>

<td>
Cloud Project
</td>

<td>
Submitted
</td>

</tr>

<tr>

<td>
Sara Ahmed
</td>

<td>
Database Report
</td>

<td>
Pending Review
</td>

</tr>

</tbody>

</table>

</div>

</div>

);

}

export default TeacherDashboard;