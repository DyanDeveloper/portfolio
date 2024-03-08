import React from "react";
import "./Header.scss";
import Navbar from "@/components/Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <Navbar />
      </header>
    </>
  )
}

export default Header