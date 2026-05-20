import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const handleLogin = async () => {

if (!email || !password) {

alert("Please fill all fields.");
return;

}

try {

setLoading(true);

await loginUser(email, password);

alert("Login Successful.");

navigate("/dashboard");

}

catch (error) {

alert(error.message);

}

finally {

setLoading(false);

}

};

return (

<div className="auth-container">

<div className="auth-box">

<h1>
AssignArc Login
</h1>

<p>
Welcome back
</p>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<button
className="primary-btn"
onClick={handleLogin}
>

{loading ? "Logging In..." : "Login"}

</button>

<p>

No account?

<Link to="/signup">

Signup

</Link>

</p>

</div>

</div>

);

}

export default Login;