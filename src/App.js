import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Rate from "./pages/Rate";
import Requests from "./pages/Requests";
import TutorSignup from "./pages/TutorSignup";
import StudentSignup from "./pages/StudentSignup";
import Learn from "./pages/Learn";
import AuthState from "./context/auth/AuthState";
import Reminder from "./pages/Reminder";
import Profile from "./pages/Profile";
import SetReminder from "./pages/SetReminder";
import ViewReminder from "./pages/ViewReminder";

function App() {
  return (
    <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/tutor/signup" element={<TutorSignup />} />
            <Route path="/student/signup" element={<StudentSignup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/setreminder" element={<SetReminder />} />
            <Route path="/viewreminder" element={<ViewReminder />} />
            <Route path="/rate/:id" element={<Rate />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    </AuthState>
  );
}

export default App;
