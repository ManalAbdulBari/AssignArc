import { Link } from "react-router-dom";

function Login(){

return(

<div>

<h1>AssignArc Login</h1>

<input placeholder="Email"/>

<input
placeholder="Password"
type="password"
/>

<button>

Login

</button>

<p>

No account?

<Link to="/signup">

Signup

</Link>

</p>

</div>

)

}

export default Login;