/* eslint-disable no-unused-vars */
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from "react";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Judge from "./pages/Judge";
import SpaceCreation from "./pages/SpaceCreation";
import Judges from "./pages/judges";
import Mentors from './pages/mentors';

export default function App() {
  const sidebarElements = [
    { title: "Overview", link: "/" },
    { title: "Submission board", link: "/sub" },
    { title: "Participants space", link: "/part" },
    { title: "Judges space", link: "/judg" }
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex full-screen">
      <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <Mentors isOpen={isSidebarOpen} /> */}
      <Login/>
          </div>
  );
}
