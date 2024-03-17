import React from "react";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramLine, RiTwitterFill } from "@remixicon/react";

const createIcon = (IconComponent, hrefURL, iconTitle, iconSize) => {
    return () => (
        <a href={hrefURL} title={iconTitle} className="link-social flex items-center text-sm gap-2">
            <IconComponent size={iconSize} className="icon-social fill-primary-200 transition-025 opacity-60 hover:opacity-90" />
        </a>
    );
};

export const IconInstagram = createIcon(RiInstagramLine, "https://www.instagram.com/roldandev.ar/", "Instagram", 26);
export const IconLinkedin = createIcon(RiLinkedinBoxFill, "https://www.linkedin.com/in/dyandeveloper/", "Linkedin", 26);
export const IconTwitter = createIcon(RiTwitterFill, "https://twitter.com/__dyyan__", "Twitter", 26);
export const IconGithub = createIcon(RiGithubFill, "https://github.com/DyanDeveloper", "Github", 26);
