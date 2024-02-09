import React from "react";
import Login from "./pages/login";
// import Sidebar from "../Components/Sidebar";
import Judge from "./pages/Judge";
import SpaceCreation from "./pages/SpaceCreation";

export default function App() {
  //   const sidebarElements = [
  //     { title: "Overview", link: "/" },
  //     { title: "Submission board", link: "/sub" },
  //     { title: "Participants space", link: "/part" },
  //     { title: "Judges space", link: "/judg" }
  //   ];

  const teams = [
    { num: 1, etat: "En cours" },
    { num: 2, etat: "Terminé" },
    { num: 3, etat: "En attente" },
    // Ajoutez d'autres équipes si nécessaire
  ];
  return (
    // <div className="h-screen">
    //   <Sidebar elements={sidebarElements} />
    // </div>
    // <Judge teams={teams} challenge={"Challage1"} />
    <SpaceCreation row={10} col={10} />
  );
}
