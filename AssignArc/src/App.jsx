import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Login from "./pages/login";
import Signup from "./pages/signup";

import Dashboard from "./pages/dashboard";
import Assignments from "./pages/Assignments";
import Profile from "./pages/Profile";

import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadAssignment from "./pages/UploadAssignment";
import Submissions from "./pages/Submissions";

import AssignmentDetail from "./pages/AssignmentDetail";
import NotFound from "./pages/NotFound";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function Layout({ children }) {

return (

<div className="app-container">

<Sidebar />

<div className="main-content">

<Navbar />

{children}

</div>

</div>

);

}

function App() {

return (

<BrowserRouter>

<Routes>

{/* Authentication */}

<Route
path="/"
element={<Login />}
/>

<Route
path="/signup"
element={<Signup />}
/>

{/* Main Dashboard */}

<Route
path="/dashboard"
element={
<Layout>
<Dashboard />
</Layout>
}
/>

<Route
path="/assignments"
element={
<Layout>
<Assignments />
</Layout>
}
/>

<Route
path="/assignment/:id"
element={
<Layout>
<AssignmentDetail />
</Layout>
}
/>

<Route
path="/profile"
element={
<Layout>
<Profile />
</Layout>
}
/>

{/* Student */}

<Route
path="/student"
element={
<Layout>
<StudentDashboard />
</Layout>
}
/>

{/* Teacher */}

<Route
path="/teacher"
element={
<Layout>
<TeacherDashboard />
</Layout>
}
/>

{/* Upload */}

<Route
path="/upload"
element={
<Layout>
<UploadAssignment />
</Layout>
}
/>

{/* Submissions */}

<Route
path="/submissions"
element={
<Layout>
<Submissions />
</Layout>
}
/>

{/* 404 */}

<Route
path="*"
element={<NotFound />}
/>

</Routes>

</BrowserRouter>

);

}

export default App;