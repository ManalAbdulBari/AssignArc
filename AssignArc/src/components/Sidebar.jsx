import { Link } from "react-router-dom"

function Sidebar(){

return(

<div className="sidebar">

<h2>AssignArc</h2>

<Link to="/dashboard">
Dashboard
</Link>

<Link to="/assignments">
Assignments
</Link>

<Link to="/profile">
Profile
</Link>

</div>

)

}

export default Sidebar;