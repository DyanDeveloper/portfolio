import React from "react";
import curriculumPDF from "@/assets/documents/curriculum.pdf";

export const ButtonCurriculum = () => {
    const handleDownload = () => {
        window.open(curriculumPDF);
    };

    return (
      <>
        <button type="button" className="download-button text-primary-200 opacity-60 text-sm hover:opacity-80" onClick={handleDownload}>
            Descargar CV
        </button>
      </>
    );
};
