import { useState } from "react";

function Profile() {

const [name,setName]=useState("Manal");

const [email,setEmail]=useState(
"manalbari00@gmail.com"
);

const [department,setDepartment]=
useState(
"Software Engineering"
);

const [semester,setSemester]=
useState("8th Semester");

const handleSave=(e)=>{

e.preventDefault();

alert(
"Profile Updated Successfully"
);

};

return(

<div>

<h1 className="page-title">

Profile

</h1>

<div className="card">

<form
className="profile-form"
onSubmit={handleSave}
>

<div
className="profile-top"
>

<div
className="profile-avatar"
>

M

</div>

<h2>

Student Profile

</h2>

</div>

<label>

Full Name

</label>

<input
type="text"
value={name}
onChange={(e)=>
setName(
e.target.value
)}
/>

<label>

Email

</label>

<input
type="email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)}
/>

<label>

Department

</label>

<input
type="text"
value={department}
onChange={(e)=>
setDepartment(
e.target.value
)}
/>

<label>

Semester

</label>

<input
type="text"
value={semester}
onChange={(e)=>
setSemester(
e.target.value
)}
/>

<button
className="primary-btn"
>

Save Changes

</button>

</form>

</div>

</div>

);

}

export default Profile;