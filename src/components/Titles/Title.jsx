import React from "react";

// Titles
const TitleH1 = ({ title }) => <h1 className="w-full text-center text-primary-50 text-6xl mb-2">{title}</h1>;
// Subtitles
const SubtitleH2 = ({ title }) => <h2 className="max-w-fit text-primary-100 opacity-75 text-4xl">{title}</h2>;
const SubtitleH3 = ({ title }) => <h3 className="max-w-fit text-primary-200 opacity-60">{title}</h3>;
const SubtitleH4 = ({ title }) => <h4 className="max-w-fit text-primary-200 opacity-60 mb-2 text-sm">{title}</h4>;
// Paragraphs
const ParagraphP = ({ title }) => <p className="max-w-xl text-primary-200 opacity-60 mt-5">{title}</p>

export { TitleH1, SubtitleH2, SubtitleH3, SubtitleH4, ParagraphP };
