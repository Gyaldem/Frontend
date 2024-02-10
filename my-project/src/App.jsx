import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/sidebar";
import Spaces from './pages/spaces';
import Judges from './pages/judges';
import Mentors from './pages/mentors';
import Header from "./components/header";
import SubmissionBoard from "./pages/submissionBoard";

  export default function App() {
  const sidebarElements = [
    { title: "Overview", link: "/overview" },
    { title: "Submission board", link: "/submission-board" },
    { title: "Participants space", link: "/participants" },
    { title: "Judges space", link: "/judges" },
    { title: "Mentors space", link: "/mentors" }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeElement, setActiveElement] = useState(null); // Initialize activeElement state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // useEffect hook to retrieve activeElement from localStorage on component mount
  useEffect(() => {
    const storedActiveElement = localStorage.getItem('activeElement');
    if (storedActiveElement) {
      setActiveElement(storedActiveElement);
    }
    localStorage.removeItem('activeElement');
  }, []);

  

  
    return (
      <Router>
        <div className="flex flex-col full-screen"> 
          <Header isOpen={isSidebarOpen} activeElement={activeElement}/> 
          <div className="flex flex-1"> 
            <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/submission-board" element={<SubmissionBoard isOpen={isSidebarOpen}/>} />
              <Route path="/participants" element={<Spaces isOpen={isSidebarOpen} />} />
              <Route path="/judges" element={<Judges isOpen={isSidebarOpen}/>} />
              <Route path="/mentors" element={<Mentors isOpen={isSidebarOpen} />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  

// Define components for each route
const Overview = () => <div>Overview Page</div>;
