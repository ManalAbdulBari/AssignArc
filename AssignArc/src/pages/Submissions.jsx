function Submissions() {

const submissions=[

{
id:1,
student:"Ali Khan",
assignment:"Cloud Computing",
status:"Submitted",
date:"20 May 2026"
},

{
id:2,
student:"Sara Ahmed",
assignment:"Database Project",
status:"Pending",
date:"22 May 2026"
},

{
id:3,
student:"Hamza Ali",
assignment:"Software Engineering",
status:"Reviewed",
date:"24 May 2026"
}

];

return(

<div>

<h1 className="page-title">

Submissions

</h1>

<div className="card">

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

<th>
Date
</th>

</tr>

</thead>

<tbody>

{submissions.map((item)=>(

<tr key={item.id}>

<td>

{item.student}

</td>

<td>

{item.assignment}

</td>

<td>

<span
className={`status ${item.status.toLowerCase()}`}
>

{item.status}

</span>

</td>

<td>

{item.date}

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);

}

export default Submissions;