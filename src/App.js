import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Main from "./main";
import Footer from "./component/footer";
import About from "./component/About";
import Personal from "./component/personal";
import Business from "./component/business";
import Onlineservice from "./component/onlineservice";
import Login from "./component/login";
import RegistrationForm from "./component/create";
import Adminlogin from "./component/Admin/adminlogin";
import Dashboard from "./component/Admin/dashboard";
import ChartGraph from "./component/Admin/TradingChart";
import SubbankerForm from "./component/Admin/subbanker";
import AssignLocker from "./component/Admin/assignlocker";
import NotificationComponent from "./component/Admin/notification";
import SidebarComponent from "./component/Admin/sidebar";
import HeaderBar from "./component/Admin/headerbar";
import GeneralSettings from "./component/Admin/setting";

// AppContent component to handle routes and conditional rendering of Navbar and Footer
const AppContent = () => {
  const location = useLocation();
  const noNavbarFooterPages = [
    "/",
    "/adminlogin",
    "/dashboard",
    "/subbanker",
    "/assignlocker",
    "/notification",
    "/sidebar",
    "/setting" // corrected "notification and alert" to "/notification"
  ];
  const shouldDisplayNavbarFooter = !noNavbarFooterPages.includes(location.pathname);

  return (
    <>
      {shouldDisplayNavbarFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/onlineservice" element={<Onlineservice />} />
        <Route path="/create" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/sidebar" element={<SidebarComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/TradingChart" element={<ChartGraph />} />
        <Route path="/subbanker" element={<SubbankerForm />} />
        <Route path="/assignlocker" element={<AssignLocker />} />
        <Route path="/notification" element={<NotificationComponent />} />
        <Route path="/setting" element={<GeneralSettings />} />
      </Routes>
      {shouldDisplayNavbarFooter && <Footer />}
    </>
  );
};

// Main App component to wrap AppContent with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
