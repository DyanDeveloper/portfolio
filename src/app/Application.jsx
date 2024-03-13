import React from "react";
// Local Import
import { Home, Experience } from "@/pages";
import { Header } from "@/components";
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