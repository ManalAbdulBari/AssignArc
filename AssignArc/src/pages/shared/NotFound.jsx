import {

Link

}

from "react-router-dom";

function NotFound(){

return(

<div
className="notfound-container"
>

<h1>

404

</h1>

<h2>

Page Not Found

</h2>

<p>

The page you are looking for does not exist.

</p>

<div
className="action-section"
>

<Link to="/">

<button
className="primary-btn"
>

Login

</button>

</Link>

<Link to="/student">

<button
className="secondary-btn"
>

Student Portal

</button>

</Link>

<Link to="/teacher">

<button
className="primary-btn"
>

Teacher Portal

</button>

</Link>

</div>

</div>

);

}

export default NotFound;