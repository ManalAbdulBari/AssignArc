import {

useEffect,
useState

}

from "react";

import {

getAssignments

}

from "../services/assignmentService";

function useAssignments(){

const [assignments,setAssignments]=

useState([]);

const [loading,setLoading]=

useState(true);

const [error,setError]=

useState(null);

const loadAssignments=

async()=>{

try{

setLoading(true);

setError(null);

const snapshot=

await getAssignments();

const data=

snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);

setAssignments(

data

);

}

catch(err){

setError(

err.message

);

console.log(err);

}

finally{

setLoading(false);

}

};

useEffect(()=>{

loadAssignments();

},[]);

return{

assignments,

loading,

error,

reload:

loadAssignments

};

}

export default useAssignments;