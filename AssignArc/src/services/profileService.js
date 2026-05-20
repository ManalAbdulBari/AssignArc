import {

doc,
getDoc,
setDoc,
serverTimestamp

}

from "firebase/firestore";

import {

db

}

from "../firebase/firebase";

export const getProfile=

async(uid)=>{

try{

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

}

catch(error){

console.log(error);

throw error;

}

};

export const updateProfile=

async(

uid,
data

)=>{

try{

await setDoc(

doc(

db,

"users",

uid

),

{

...data,

updatedAt:

serverTimestamp()

},

{

merge:true

}

);

}

catch(error){

console.log(error);

throw error;

}

};