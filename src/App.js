import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
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
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Welcome from "./pages/Welcome";
import TutorProfileEdit from "./pages/TutorProfileEdit";
import StudentProfileEdit from "./pages/StudentProfileEdit";
import TutorDashboard from "./pages/TutorDashboard";
import ReminderHistory from "./pages/ReminderHistory";

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/tutor/signup" element={<TutorSignup />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tutor_dashboard" element={<TutorDashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/setreminder" element={<SetReminder />} />
          <Route path="/reminder_history" element={<ReminderHistory />} />
          <Route path="/viewreminder" element={<ViewReminder />} />
          <Route path="/rate/:id" element={<Rate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tutor/profile-edit" element={<TutorProfileEdit />} />
          <Route path="/student/profile-edit" element={<StudentProfileEdit />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
