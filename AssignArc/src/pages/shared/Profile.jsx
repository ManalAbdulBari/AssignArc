import {

useState,
useEffect

}

from "react";

import {

auth

}

from "../../firebase/firebase";

import {

getProfile,
updateProfile

}

from "../../services/profileService";

import Loader

from "../../components/common/Loader";

function Profile(){

const [name,setName]=

useState("");

const [email,setEmail]=

useState("");

const [department,setDepartment]=

useState("");

const [semester,setSemester]=

useState("");

const [loading,setLoading]=

useState(true);

const [saving,setSaving]=

useState(false);

useEffect(()=>{

if(

auth.currentUser

){

loadProfile();

}

},[]);

const loadProfile=

async()=>{

try{

const data=

await getProfile(

auth.currentUser.uid

);

if(data){

setName(

data.name||""

);

setEmail(

data.email||

auth.currentUser.email||

""

);

setDepartment(

data.department||""

);

setSemester(

data.semester||""

);

}

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};

const handleSave=

async(e)=>{

e.preventDefault();

try{

setSaving(true);

await updateProfile(

auth.currentUser.uid,

{

name,

department,

semester

}

);

alert(

"Profile Updated Successfully"

);

}

catch(error){

alert(

error.message

);

}

finally{

setSaving(false);

}

};

if(

loading

){

return(

<Loader

text="Loading Profile..."

/>

);

}

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

{

name

?

name[0].toUpperCase()

:

"U"

}

</div>

<h2>

User Profile

</h2>

</div>

<label>

Full Name

</label>

<input

type="text"

value={name}

onChange={(e)=>{

setName(

e.target.value

);

}}

/>

<label>

Email

</label>

<input

type="email"

value={email}

disabled

/>

<label>

Department

</label>

<input

type="text"

value={department}

onChange={(e)=>{

setDepartment(

e.target.value

);

}}

/>

<label>

Semester

</label>

<input

type="text"

value={semester}

onChange={(e)=>{

setSemester(

e.target.value

);

}}

/>

<button

className="primary-btn"

disabled={saving}

>

{

saving

?

"Saving..."

:

"Save Changes"

}

</button>

</form>

</div>

</div>

);

}

export default Profile;