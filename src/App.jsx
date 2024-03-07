// React
import React from "react";
// Local Import
import { Home, Projects, Feedback, Contact, Experience } from "@/pages";
import { Navbar } from "@/components";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Feedback />
      <Contact />
    </>
  )
}

export default App
