import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth Routes
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/Forgot-Password";
import ResetPassword from "./pages/Reset-Password";

// Dashboard Routes
import Dashboard from "./pages/dashboard/Index";
import Profile from "./pages/dashboard/Profile";
import Invoice from "./pages/dashboard/Invoice";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} index />
        <Route element={<Login />} path="/login" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Invoice />} path="/invoice/:id" />
      </Routes>
    </BrowserRouter>
  )
}