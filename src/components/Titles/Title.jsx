import React from "react";

const TitleH1 = ({ title, className }) => <h1 className={`${className} w-full text-center text-primary-50 text-6xl mb-2`}>{title}</h1>;
const SubtitleH2 = ({ title, className }) => <h2 className={`${className} max-w-fit text-primary-100 opacity-75 text-4xl`}>{title}</h2>;
const SubtitleH3 = ({ title, className }) => <h3 className={`${className} max-w-fit text-primary-200 opacity-60`}>{title}</h3>;
const SubtitleH4 = ({ title, className }) => <h4 className={`${className} max-w-fit text-primary-200 opacity-60 mb-2 text-sm`}>{title}</h4>;
const ParagraphP = ({ title, className }) => <p className={`${className} max-w-xl text-primary-200 opacity-60 mt-5`}>{title}</p>

export { TitleH1, SubtitleH2, SubtitleH3, SubtitleH4, ParagraphP };
