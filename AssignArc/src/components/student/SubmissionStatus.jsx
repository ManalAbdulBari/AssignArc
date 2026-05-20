function SubmissionStatus({

submitted=0,

pending=0,

total=0

}){

return(

<div className="card">

<h3>

Submission Status

</h3>

<div
className="status-grid"
>

<div
className="status-box submitted-box"
>

<h2>

{submitted}

</h2>

<p>

Submitted

</p>

</div>

<div
className="status-box pending-box"
>

<h2>

{pending}

</h2>

<p>

Pending

</p>

</div>

<div
className="status-box total-box"
>

<h2>

{total}

</h2>

<p>

Total

</p>

</div>

</div>

</div>

);

}

export default SubmissionStatus;