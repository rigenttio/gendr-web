// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/404";
import BerandaPage from "./pages/beranda";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/Fragments/Spinner";

function App() {
  return (
    <Router>
      <Toaster />
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardPage />} path="/dashboard" />
          </Route>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<Spinner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
