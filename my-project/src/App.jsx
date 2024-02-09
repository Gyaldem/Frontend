// App.js
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from "react";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Judges from "./pages/judges";

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
      <Judges isOpen={isSidebarOpen} />

    </div>
  );
}
