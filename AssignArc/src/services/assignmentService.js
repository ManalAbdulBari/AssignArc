import {
collection,
addDoc,
getDocs,
deleteDoc,
doc,
serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const assignmentRef=
collection(
db,
"assignments"
);

export const createAssignment=
(data)=>{

return addDoc(
assignmentRef,
{
...data,
createdAt:
serverTimestamp()
}
);

};

export const getAssignments=
()=>{

return getDocs(
assignmentRef
);

};

export const deleteAssignment=
(id)=>{

return deleteDoc(
doc(
db,
"assignments",
id
)
);

};