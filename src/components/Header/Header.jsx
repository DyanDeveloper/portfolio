import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./Header.scss";

const Header = () => {

  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerElement = document.getElementById("header");
      
      if (headerElement) {
        const isHeaderActive = scrollPosition > headerElement.offsetTop;
        setHeaderActive(isHeaderActive);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header id="header" className={`header ${headerActive ? "active" : ""}`}>
        <div className="w-full max-w-5xl flex items-center justify-center text-center">
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header