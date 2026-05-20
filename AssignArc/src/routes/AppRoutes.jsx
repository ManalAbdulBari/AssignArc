import {

Routes,
Route

}

from "react-router-dom";

import ProtectedRoute

from "../components/common/ProtectedRoute";

import Login

from "../pages/auth/login";

import Signup

from "../pages/auth/signup";

import StudentDashboard

from "../pages/student/StudentDashboard";

import Assignments

from "../pages/student/Assignments";

import UploadAssignment

from "../pages/student/UploadAssignment";

import SubmissionHistory

from "../pages/student/SubmissionHistory";

import TeacherDashboard

from "../pages/teacher/TeacherDashboard";

import CreateAssignment

from "../pages/teacher/CreateAssignment";

import ManageAssignments

from "../pages/teacher/ManageAssignments";

import StudentSubmissions

from "../pages/teacher/StudentSubmissions";

import DownloadFiles

from "../pages/teacher/DownloadFiles";

import Reports

from "../pages/teacher/Reports";

import Profile

from "../pages/shared/Profile";

import Settings

from "../pages/shared/Settings";

import NotFound

from "../pages/shared/NotFound";

function AppRoutes(){

return(

<Routes>

<Route

path="/"

element={

<Login/>

}

/>

<Route

path="/signup"

element={

<Signup/>

}

/>

<Route

path="/student"

element={

<ProtectedRoute>

<StudentDashboard/>

</ProtectedRoute>

}

/>

<Route

path="/assignments"

element={

<ProtectedRoute>

<Assignments/>

</ProtectedRoute>

}

/>

<Route

path="/upload"

element={

<ProtectedRoute>

<UploadAssignment/>

</ProtectedRoute>

}

/>

<Route

path="/history"

element={

<ProtectedRoute>

<SubmissionHistory/>

</ProtectedRoute>

}

/>

<Route

path="/teacher"

element={

<ProtectedRoute>

<TeacherDashboard/>

</ProtectedRoute>

}

/>

<Route

path="/create"

element={

<ProtectedRoute>

<CreateAssignment/>

</ProtectedRoute>

}

/>

<Route

path="/manage"

element={

<ProtectedRoute>

<ManageAssignments/>

</ProtectedRoute>

}

/>

<Route

path="/submissions"

element={

<ProtectedRoute>

<StudentSubmissions/>

</ProtectedRoute>

}

/>

<Route

path="/download"

element={

<ProtectedRoute>

<DownloadFiles/>

</ProtectedRoute>

}

/>

<Route

path="/reports"

element={

<ProtectedRoute>

<Reports/>

</ProtectedRoute>

}

/>

<Route

path="/profile"

element={

<ProtectedRoute>

<Profile/>

</ProtectedRoute>

}

/>

<Route

path="/settings"

element={

<ProtectedRoute>

<Settings/>

</ProtectedRoute>

}

/>

<Route

path="*"

element={

<NotFound/>

}

/>

</Routes>

);

}

export default AppRoutes;