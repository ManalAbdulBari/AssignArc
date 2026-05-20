import { Link } from "react-router-dom";

function Sidebar({

role="student"

}){

return(

<div className="sidebar">

<h2>

AssignArc

</h2>

{

role==="teacher"

?

<>

<Link to="/teacher">

Dashboard

</Link>

<Link to="/create">

Create Assignment

</Link>

<Link to="/manage">

Manage Assignments

</Link>

<Link to="/submissions">

Student Submissions

</Link>

<Link to="/download">

Download Files

</Link>

<Link to="/reports">

Reports

</Link>

<Link to="/profile">

Profile

</Link>

<Link to="/settings">

Settings

</Link>

</>

:

<>

<Link to="/student">

Dashboard

</Link>

<Link to="/assignments">

Assignments

</Link>

<Link to="/upload">

Upload Assignment

</Link>

<Link to="/history">

Submission History

</Link>

<Link to="/profile">

Profile

</Link>

<Link to="/settings">

Settings

</Link>

</>

}

</div>

);

}

export default Sidebar;