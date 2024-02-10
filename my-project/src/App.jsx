import React from "react";
// import Sidebar from "../Components/Sidebar";
import Challenge from "./pages/Challenge";
import Mentor from "./Components/Mentor";
import Submission from "./pages/Submission";
import Sub from "./Components/Sub";
import Submission2 from "./pages/Submission2";
import Login from "./pages/login";
import Submit from "./Components/Submit";
import FenetreSub from "./Components/fenetreSub";

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



