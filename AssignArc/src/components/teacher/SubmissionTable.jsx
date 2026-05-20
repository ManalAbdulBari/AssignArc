function SubmissionTable({

submissions=[],

onDownload

}){

return(

<div className="card">

<table className="table">

<thead>

<tr>

<th>

Assignment

</th>

<th>

Course

</th>

<th>

Student ID

</th>

<th>

File

</th>

<th>

Action

</th>

</tr>

</thead>

<tbody>

{

submissions.length===0

?

<tr>

<td
colSpan="5"
className="empty-state"
>

No Submissions Found

</td>

</tr>

:

submissions.map(

(item)=>(

<tr
key={item.id}
>

<td>

{item.title}

</td>

<td>

{

item.course||

"-"

}

</td>

<td>

{

item.studentId||

"-"

}

</td>

<td>

{

item.fileName||

"No File"

}

</td>

<td>

<button

className="primary-btn"

onClick={()=>{

onDownload(

item.fileUrl

);

}}

>

Download

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

);

}

export default SubmissionTable;