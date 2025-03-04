import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";  
import DashboardPage from "./pages/DashboardPage";  
import AdminPanel from "./pages/AdminPanel";
import ProfitGoals from "./pages/ProfitGoal";
import Sidebar from "./Components/Sidebar"
import { AuthProvider } from "./context/AuthContext";

// AppLayout component with Sidebar
const AppLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />  
    <div style={{ flex: 1, padding: "20px" }}>
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login page as the home page (no Sidebar) */}
          <Route path="/" element={<Login />} />  

          {/* All other pages wrapped with AppLayout (includes Sidebar) */}
          <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
          <Route path="/admin" element={<AppLayout><AdminPanel /></AppLayout>} />
          <Route path="/profit" element={<AppLayout><ProfitGoals /></AppLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;