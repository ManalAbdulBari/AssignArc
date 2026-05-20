import { Navigate }

from "react-router-dom";

import {

useAuth

}

from "../../context/AuthContext";

import Loader

from "./Loader";

function ProtectedRoute({

children

}){

const {

user,
loading

}=useAuth();

if(

loading

){

return(

<Loader

text="Checking Authentication..."

/>

);

}

if(

!user

){

return(

<Navigate

to="/"

replace

/>

);

}

return children;

}

export default ProtectedRoute;