import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const routes = [
    {
      ID: "1",
      path: "/",
      name: "Perfil"
    },
    {
      ID: "2",
      path: "/experiencia",
      name: "Experiencia"
    },
    {
      ID: "3",
      path: "/proyectos",
      name: "Proyectos"
    },
    {
      ID: "4",
      path: "/clientes",
      name: "Clientes"
    },
    {
      ID: "5",
      path: "/contacto",
      name: "Contáctame"
    }
  ];

  return (
    <>
      <nav id="navegation" className="navegation">
        <ul className="navegation-ul">
          {routes.map((route, index) => (
            <li key={route.ID} className={`navegation-li ${index === routes.length - 1 ? 'contact-cta' : ''}`}>
              <a href={route.path} className="navegation-path hover:opacity-50">{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
