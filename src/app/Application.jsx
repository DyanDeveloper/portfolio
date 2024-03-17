import React from "react";
import { Home, Experience, Projects, Clients, Contact } from "@/pages";
import { Header } from "@/components";
import "@/assets/styles/general.scss";

function Application() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Clients />
      <Contact />
    </>
  )
}

export default Application