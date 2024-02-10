import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/sidebar";
import Spaces from './pages/spaces';
import Judges from './pages/judges';
import Mentors from './pages/mentors';
import Header from "./Components/header";
// import SubmissionBoard from "./pages/submissionBoard";
import Challenge from "./pages/Challenge";
import Judge from "./pages/Judge";
import Team from "./Components/Team";

export default function App() {
  const sidebarElements = [
    { title: "Challenge 1", link: "/challenge1" },
    { title: "Challenge 2", link: "/challenge2" },
    { title: "Challenge 3", link: "/challenge3" },
    { title: "Challenge 4", link: "/challenge4" }
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


  const teams = [
    { num: 1, etat: "Progress" },
    { num: 2, etat: "Progress" },
    { num: 3, etat: "Progress" },
    { num: 4, etat: "Progress" }
  ];



  return (
    <Router>
      <div className="flex flex-col full-screen">
        {/* <Header isOpen={isSidebarOpen} activeElement={activeElement} /> */}
        <div className="flex flex-1">
          <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/judge" element={<Judge teams={teams} />} />
            <Route path="/challenge1" element={<Challenge team={"Team1"} />} />
            <Route path="/challenge2" element={<Challenge team={"Team2"} />} />
            <Route path="/challenge3" element={<Challenge team={"Team3"} />} />
            <Route path="/challeng4" element={<Challenge team={"Team4"} />} />

            <Route path="/overview" element={<Overview />} />
            {/* <Route path="/submission-board" element={<SubmissionBoard isOpen={isSidebarOpen} />} /> */}
            <Route path="/participants" element={<Spaces isOpen={isSidebarOpen} />} />
            <Route path="/judges" element={<Judges isOpen={isSidebarOpen} />} />
            <Route path="/mentors" element={<Mentors isOpen={isSidebarOpen} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


// Define components for each route
const Overview = () => <div>Overview Page</div>;
