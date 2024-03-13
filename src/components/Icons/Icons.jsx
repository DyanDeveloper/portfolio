import React from "react";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramLine, RiTwitterFill } from "@remixicon/react";

export const IconLinkedin = () => {
    return (
        <>
            <a href="https://www.linkedin.com/in/dyandeveloper/" 
                title="Linkedin" 
                className="link-social flex items-center text-sm gap-2">
                <RiLinkedinBoxFill size={26} className="icon-social fill-primary-200 transition-025 opacity-60 hover:opacity-90" />
            </a>
        </>
    );
};

export const IconGithub = () => {
    return (
        <>
            <a href="https://github.com/DyanDeveloper" 
                title="Github" 
                className="link-social flex items-center text-sm gap-2">
                <RiGithubFill size={24} className="icon-social fill-primary-200 transition-025 opacity-60 hover:opacity-90" />
            </a>
        </>
    );
};

export const IconInstagram = () => {
    return (
        <>
            <a href="https://www.instagram.com/roldandev.ar/" 
                title="Instagram" 
                className="link-social flex items-center text-sm gap-2">
                <RiInstagramLine size={24} className="icon-social fill-primary-200 transition-025 opacity-60 hover:opacity-90" />
            </a>
        </>
    );
};

export const IconTwitter = () => {
    return (
        <>
            <a href="https://twitter.com/__dyyan__" 
                title="Twitter" 
                className="link-social flex items-center text-sm gap-2">
                <RiTwitterFill size={24} className="icon-social fill-primary-200 transition-025 opacity-60 hover:opacity-90" />
            </a>
        </>
    );
};