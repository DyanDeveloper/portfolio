import React from "react";
import "./Home.scss";
import { TitleH1, SubtitleH2, SubtitleH3, SubtitleH4, ParagraphP } from "@/components";

const Home = () => {
  return (
    <>
      <section id="welcomeSection" className="section-home">
        <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-2 min-h-dvh">
          <SubtitleH4 title="Portafolio" />
          <TitleH1 title="Ssr Full Stack Engineer - UI/UX Designer" />
        </div>
      </section>
    </>
  )
}

export default Home