import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import Rate from "./pages/Rate";
import Requests from "./pages/Requests";
import Signup from "./pages/Signup";
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
import ProfileEdit from "./pages/ProfileEdit";
import TutorDashboard from "./pages/TutorDashboard";
import ReminderHistory from "./pages/ReminderHistory";
import ReminderBoard from "./pages/ReminderBoard";
import MyCourse from "./pages/MyCourse";
import Verify from "./pages/Verify";
import CheckEmail from "./pages/CheckEmail";
import ProtectedRoute from "./components/ProtectedRoute";
import UpdatePassword from "./pages/UpdatePassword";
import SuccessfulComment from "./pages/SuccessfulComment";

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route
            path="/tutor_dashboard"
            element={
              <ProtectedRoute>
                <TutorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn"
            element={
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/requests"
            element={
              <ProtectedRoute>
                <Requests />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/reminder_board"
            element={
              <ProtectedRoute>
                <ReminderBoard />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/reminder"
            element={
              <ProtectedRoute>
                <Reminder />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/setreminder"
            element={
              <ProtectedRoute>
                <SetReminder />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/reminder_history"
            element={
              <ProtectedRoute>
                <ReminderHistory />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewreminder"
            element={
              <ProtectedRoute>
                <ViewReminder />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/rate/:id"
            element={
              <ProtectedRoute>
                <Rate />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="update-password"
            element={
              <ProtectedRoute>
                <UpdatePassword />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/mycourses"
            element={
              <ProtectedRoute>
                <MyCourse />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile-edit"
            element={
              <ProtectedRoute>
                <ProfileEdit />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/successful-comment"
            element={
              <ProtectedRoute>
                <SuccessfulComment />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/password_recover" element={<CheckEmail />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
