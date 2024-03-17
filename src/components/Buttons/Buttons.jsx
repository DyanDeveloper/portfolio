import React from "react";
import { Link } from "react-scroll";
import { RiArrowDownWideFill } from "@remixicon/react";
import curriculumPDF from "@/assets/documents/curriculum.pdf";

const buttonText = {
  DownloadCV: "Descargar CV",
  NextSection: "Experiencias"
};

export const ButtonCurriculum = () => {
  const handleDownload = () => {
      window.open(curriculumPDF);
  };

  return (
    <>
      <button type="button" className="download-button text-primary-200 opacity-60 text-sm hover:opacity-80" onClick={handleDownload}>
          {buttonText.DownloadCV}
      </button>
    </>
  )
};

export const SectionNext = () => {
  return (
    <Link
      to="experienceSection"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="next-section-button w-full flex flex-col items-center text-primary-200 opacity-60 text-sm absolute bottom-1 cursor-pointer group">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm uppercase">
        {buttonText.NextSection}
      </span>
      <RiArrowDownWideFill size={28} />
    </Link>
  );
};