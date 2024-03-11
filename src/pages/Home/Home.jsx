import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section id="homePath" className="section-home">
        <div className="section-home__container">

          <div className="home-content">
            <h4 className="section-home__h4">Portafolio</h4>
          </div>

          <div className="home-content column-content">
            <h1 className="section-home__h1">Dylan Roldán</h1>
            <h2 className="section-home__h2">Ssr Full Stack Engineer | UI/UX Designer</h2>
          </div>

          <div className="home-content">
            <p className="section-home__p">Creado con la intención de demostrar experiencia, gran categoría y a su vez que me conozcan un poco más.</p>
          </div>

          <div className="home-content">
            <div className="buttons">
              <button type="button" className="home-cta">Experiencias</button>
              <button type="button" className="home-cta">Contáctame</button>
            </div>
            <div className="links">
              <a href="https://github.com/DyanDeveloper" title="Perfil" className="home-btn">GitHub</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home