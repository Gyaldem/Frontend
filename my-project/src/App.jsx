import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from "react";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";
import Judge from "./pages/Judge";
import SpaceCreation from "./pages/SpaceCreation";
import Judges from "./pages/judges";
import Mentors from './pages/mentors';

export default function App() {
  const mentors = [
    { nom: "Malek", dep: 'Frontend', email: "la_malek@esi.dz" },
    { nom: "Hind", dep: 'Backend', email: "la_rezzoug@esi.dz" },
    { nom: "Lylia", dep: 'UI', email: "ll_aouinine@esi.dz" },
  ];

  //   const sidebarElements = [
  //     { title: "Overview", link: "/" },
  //     { title: "Submission board", link: "/sub" },
  //     { title: "Participants space", link: "/part" },
  //     { title: "Judges space", link: "/judg" }
  //   ];
  return (

    // <Submission mentors={mentors} />
    // <Sub link={"Github File"} />
    // <Login />
    // <Submission2/>
    <FenetreSub/>

  );
};



