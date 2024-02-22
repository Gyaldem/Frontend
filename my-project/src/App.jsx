import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Challenge from "./pages/Challenge";
import Judge from "./pages/Judge";
import SpaceCreation from "./pages/SpaceCreation";
import Login from "./pages/login";
import MentorsJudges from "./pages/MentorsJudges";
import Submission2 from "./pages/Submission2";

export default function App() {


  const teams = [
    { num: 1, etat: "Progress" },
    { num: 2, etat: "Progress" },
    { num: 3, etat: "Progress" },
    { num: 4, etat: "Progress" }
  ];

  const mentors = [
    { nom: "Lylia", dep:"UX/UI", email: "ll_aouinine@esi.dz" },
    { nom: "Amina", dep:"Front web" , email: "la_malek@esi.dz" },
    { nom: "Dyna", dep:"Front web" , email: "ld_alismail@esi.dz" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/judge" element={<Judge teams={teams} />} />
        <Route path="/challenge1" element={<Challenge team={"Team1"} />} />
        <Route path="/challenge2" element={<Challenge team={"Team2"} />} />
        <Route path="/challenge3" element={<Challenge team={"Team3"} />} />
        <Route path="/challeng4" element={<Challenge team={"Team4"} />} />
        <Route path="/Class" element={<SpaceCreation row={6} col={4} />} />
        <Route path="/mentors&judges" element={<MentorsJudges mentors={mentors}/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/submission" element={<Submission2 />} />
      </Routes>
    </Router>
  );
}


// Define components for each route
const Overview = () => <div>Overview Page</div>;
