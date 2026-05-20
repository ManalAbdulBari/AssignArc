import {

collection,
addDoc,
getDocs,
deleteDoc,
doc,
getDoc,
updateDoc,
serverTimestamp

}

from "firebase/firestore";

import {

db

}

from "../firebase/firebase";

const assignmentRef=

collection(
db,
"assignments"
);

export const createAssignment=

async(data)=>{

return await addDoc(

assignmentRef,

{

...data,

createdAt:

serverTimestamp()

}

);

};

export const getAssignments=

async()=>{

return await getDocs(

assignmentRef

);

};

export const getAssignmentById=

async(id)=>{

return await getDoc(

doc(

db,

"assignments",

id

)

);

};

export const updateAssignment=

async(id,data)=>{

return await updateDoc(

doc(

db,

"assignments",

id

),

{

...data,

updatedAt:

serverTimestamp()

}

);

};

export const deleteAssignment=

async(id)=>{

return await deleteDoc(

doc(

db,

"assignments",

id

)

);

};