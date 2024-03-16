import React from "react";
import { Card1, Card2, Card3, Card4 } from "../../components/Cards/Cards";

const Experience = () => {
  return (
    <>
      <section id="experienceSection" className="section-experience pt-10">
        <div className="w-full max-w-5xl flex items-center justify-center text-center gap-6 min-h-dvh flex-wrap">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card3 />
        </div>
      </section>
    </>
  )
}

export default Experience