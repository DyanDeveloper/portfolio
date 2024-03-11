import React from "react";
import "./Navbar.scss";

const Navbar = () => {

  const routes = [
    {
      ID: "1",
      path: "/",
      name: "Inicio"
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
      path: "/feedback",
      name: "Feedbacks"
    },
    {
      ID: "5",
      path: "/contacto",
      name: "Contacto"
    }
  ];


  return (
    <>
      <nav id="navegation" className="nav">
        <ul className="nav-list">
          {routes.map((route) => (
            <li key={route.ID} className="nav-item">
              <a href={route.path} className="nav-path">{route.name}</a>
            </li>
          ))}
        </ul>

        <button type="button" className="curriculum-btn">CV</button>
      </nav>
    </>
  )
}

export default Navbar