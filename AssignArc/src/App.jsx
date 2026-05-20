import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import Login from "./pages/login"
import Signup from "./pages/signup"
import Dashboard from "./pages/dashboard"
import Assignments from "./pages/Assignments"
import Profile from "./pages/Profile"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

function Layout({ children }) {

return (

<div className="app-container">

<Sidebar/>

<div className="main-content">

<Navbar/>

{children}

</div>

</div>

)

}

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/signup" element={<Signup />} />

<Route
path="/dashboard"
element={
<Layout>
<Dashboard/>
</Layout>
}
/>

<Route
path="/assignments"
element={
<Layout>
<Assignments/>
</Layout>
}
/>

<Route
path="/profile"
element={
<Layout>
<Profile/>
</Layout>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App