import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section id="homePath" className="section-home">
        <div className="section-home__container">
          <h4 className="section-home__h4">Portafolio</h4>
          <h1 className="section-home__h1">Dylan Roldán</h1>
          <h2 className="section-home__h2">Ssr Full Stack Engineer | UI/UX Designer</h2>
          <p className="section-home__p">Creado con la intención de demostrar experiencia, categoría y a su vez que me conozcan un poco más.</p>
          <br />
          <div className="ctas-container">
            <button type="button">Ver Experiencia</button>
            <button type="button">Ver Proyectos</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home