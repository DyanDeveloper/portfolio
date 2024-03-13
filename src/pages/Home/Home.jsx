import "./Home.scss";
import React from "react";
import { TitleH1, SubtitleH2, SubtitleH4, ParagraphP, IconGithub, IconLinkedin, IconTwitter, IconInstagram, ButtonCurriculum, SectionNext } from "@/components";

const Home = () => {
  return (
    <>
      <section id="welcomeSection" className="section-home">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-2 min-h-dvh relative">
          <SubtitleH4 title="Portafolio" />
          <TitleH1 title="Dylan Roldán" />
          <SubtitleH2 title="Ssr Full Stack Engineer - UI/UX Designer" />
          <ParagraphP title="Diseñado para exhibir excelencia en el desarrollo, compartiendo experiencias significativas y proporcionando una visión más profesional de mi perfil." />
          <div className="w-full max-w-lg flex items-center justify-around gap-4 mt-4">
            <div className="flex items-center gap-4">
              <IconGithub />
              <IconLinkedin />
              <IconTwitter />
              <IconInstagram />
            </div>
            <div className="flex items-center gap-2">
              <ButtonCurriculum />
            </div>
            <SectionNext />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home