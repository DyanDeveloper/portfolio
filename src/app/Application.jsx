import React from "react";
// Local Import
import { Home, Projects, Feedback, Contact, Experience } from "@/pages";
import { Navbar, Header, Footer } from "@/components";
import "@/assets/styles/general.scss";

function Application() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
    </>
  )
}

export default Application