import React from "react";
import "./Home.scss";
import { TitleH1, SubtitleH2, SubtitleH4, ParagraphP, IconGithub, IconLinkedin, IconTwitter, IconInstagram, ButtonCurriculum } from "@/components";

const Home = () => {
  return (
    <>
      <section id="profileSection" className="section-home">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center min-h-dvh relative gap-4">
          <SubtitleH4 title="Portafolio" />
          <TitleH1 title="Leonel Roldan" />
          <SubtitleH2 title="Ingeniero Ssr Fullstack - Diseñador UI/UX" />
          <ParagraphP title="Diseñado para exhibir excelencia en el desarrollo, compartiendo experiencias significativas y proporcionando una visión más profesional de mi perfil." />
          <div className="w-full max-w-lg flex items-center justify-around mt-4">
            <div className="flex items-center gap-4">
              <IconGithub />
              <IconLinkedin />
              <IconInstagram />
              <IconTwitter />
            </div>
            <div className="flex items-center">
              <ButtonCurriculum />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home