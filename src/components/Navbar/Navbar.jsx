import React from "react";
import { Link } from "react-scroll";
import { Logo } from "@/components";
import "./Navbar.scss";

const Navbar = () => {
  const routes = [
    {
      ID: "1",
      path: "/",
      name: "Presentación",
      section: "profileSection"
    },
    {
      ID: "2",
      path: "/experiencia",
      name: "Experiencia",
      section: "experienceSection"
    },
    {
      ID: "3",
      path: "/proyectos",
      name: "Proyectos",
      section: "projectsSection"
    },
    {
      ID: "4",
      path: "/clientes",
      name: "Clientes",
      section: "clientsSection"
    },
    {
      ID: "5",
      path: "/contacto",
      name: "Contáctame",
      section: "contactSection"
    }
  ];

  return (
    <>
      <nav id="navegation" className="navegation">
        <ul className="navegation-ul">
          {routes.map((route) => (
            <li key={route.ID} className="navegation-li">
              <Link 
                href={route.path} 
                to={route.section} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="navegation-path hover:opacity-50">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
