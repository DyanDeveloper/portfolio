import React from "react";

// Titles
const TitleH1 = ({ title }) => <h1 className="w-full text-center text-primary-200 text-3xl">{title}</h1>;
// Subtitles
const SubtitleH2 = ({ title }) => <h2 className="max-w-fit text-primary-200">{title}</h2>;
const SubtitleH3 = ({ title }) => <h3 className="max-w-fit text-primary-200 opacity-70">{title}</h3>;
const SubtitleH4 = ({ title }) => <h4 className="max-w-fit text-primary-200 opacity-70">{title}</h4>;
// Paragraphs
const ParagraphP = ({ title }) => <p className="max-w-lg text-primary-200 opacity-60">{title}</p>

export { TitleH1, SubtitleH2, SubtitleH3, SubtitleH4, ParagraphP };
