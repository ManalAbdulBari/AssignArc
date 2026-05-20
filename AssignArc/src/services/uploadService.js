import {

ref,
uploadBytes,
getDownloadURL

}

from "firebase/storage";

import {

collection,
addDoc,
serverTimestamp

}

from "firebase/firestore";

import {

storage,
db

}

from "../firebase/firebase";

export const uploadAssignment=

async(

file,
assignmentTitle,
course,
studentId

)=>{

try{

const filePath=

`submissions/

${studentId}/

${Date.now()}_

${file.name}`;

const fileRef=

ref(

storage,

filePath

);

await uploadBytes(

fileRef,

file

);

const fileUrl=

await getDownloadURL(

fileRef

);

const submission=

await addDoc(

collection(

db,

"submissions"

),

{

title:

assignmentTitle,

course,

studentId,

fileName:

file.name,

fileUrl,

fileType:

file.type,

fileSize:

file.size,

submittedAt:

serverTimestamp()

}

);

return{

id:

submission.id,

fileUrl

};

}

catch(error){

console.log(error);

throw error;

}

};