import React from "react";
import Login from "./pages/login";
import Sidebar from "./components/sidebar";

export default function App() {
  const sidebarElements = [
    { title: "Overview", link: "/" },
    { title: "Submission board", link: "/sub" },
    { title: "Participants space", link: "/part" },
    { title: "Judges space", link: "/judg" }
  ];
  return (
    <div className="h-screen">
      <Sidebar elements={sidebarElements} />
    </div>
  );
}
