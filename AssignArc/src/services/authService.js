import {

signInWithEmailAndPassword,
createUserWithEmailAndPassword,
signOut,
sendPasswordResetEmail

}

from "firebase/auth";

import {

doc,
setDoc,
getDoc,
serverTimestamp

}

from "firebase/firestore";

import {

auth,
db

}

from "../firebase/firebase";

export const signupUser=

async(

email,
password,
role

)=>{

const credential=

await createUserWithEmailAndPassword(

auth,

email,

password

);

await setDoc(

doc(

db,

"users",

credential.user.uid

),

{

email,

role,

uid:

credential.user.uid,

createdAt:

serverTimestamp()

}

);

return credential;

};

export const loginUser=

async(

email,
password

)=>{

const credential=

await signInWithEmailAndPassword(

auth,

email,

password

);

const snapshot=

await getDoc(

doc(

db,

"users",

credential.user.uid

)

);

if(

!snapshot.exists()

){

throw new Error(

"User profile not found"

);

}

return{

user:

credential.user,

role:

snapshot.data().role

};

};

export const getCurrentUser=

async(uid)=>{

const snapshot=

await getDoc(

doc(

db,

"users",

uid

)

);

if(

snapshot.exists()

){

return{

id:

snapshot.id,

...snapshot.data()

};

}

return null;

};

export const logoutUser=

()=>{

return signOut(

auth

);

};

export const resetPassword=

(email)=>{

return sendPasswordResetEmail(

auth,

email

);

};