import { useState } from "react";

function UploadCard({

onUpload,

loading=false

}){

const [file,setFile]=

useState(null);

const handleUpload=()=>{

if(!file){

alert(

"Select a file"

);

return;

}

onUpload(file);

};

return(

<div className="card">

<h3>

Upload Assignment

</h3>

<p>

Choose assignment file

</p>

<input

type="file"

onChange={(e)=>{

setFile(

e.target.files[0]

);

}}

/>

{

file&&(

<p>

Selected:

{file.name}

</p>

)

}

<button

className="primary-btn"

onClick={handleUpload}

disabled={loading}

>

{

loading

?

"Uploading..."

:

"Upload File"

}

</button>

</div>

);

}

export default UploadCard;