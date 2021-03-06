import React from "react";
import { Logo } from "../styledComponents/index.jsx";
import { THEME } from "../../colorscheme/index.jsx";

import {
  SiCplusplus,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiGnubash,
  SiCss3,
  SiVim,
  SiHtml5,
  SiNeovim,
  SiGithub,
  SiVisualstudio,
  SiSublimetext,
  SiJetbrains,
  SiCodeforces,
  SiCodechef,
  SiHappycow,
  SiCodecademy,
  SiPowershell,
} from "react-icons/si";

import { BsFillTerminalFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FcTreeStructure } from "react-icons/fc";

import { RiExternalLinkLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"

const LogoClass =
  " group hover:bg-" +
  THEME.logo.hover.background +
  " hover:text-" +
  THEME.logo.hover.color;

const LogoText =
  "sm:text-xs md:text-base lg:text-xl text-" +
  THEME.logo.color +
  " group-hover:text-" +
  THEME.logo.hover.group.color;

const Icon = "text-xl md:text-2xl lg:text-4xl list-none mx-2";
const Icon2 = "text-xl md:text-2xl lg:text-4xl list-none my-2";

const Logo2 = "flex items-center justify-center md:m-2 lg:m-2";


export const Cpp = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-400"}>
        <SiCplusplus />
      </span>
      <span className={LogoText}>C++</span>
    </Logo>
  );
};
export const ReactJs = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-500"}>
        <SiReact />
      </span>
      <span className={LogoText}>ReactJs</span>
    </Logo>
  );
};
export const Bootstrap = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-purple-500 "}>
        <SiBootstrap />
      </span>
      <span className={LogoText}>Bootstrap</span>
    </Logo>
  );
};
export const Bash = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-purple-400 "}>
        <SiGnubash />
      </span>
      <span className={LogoText}>Bash</span>
    </Logo>
  );
};
export const Tailwind = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-300 "}>
        <SiTailwindcss />
      </span>
      <span className={LogoText}>Tailwind</span>
    </Logo>
  );
};
export const Css = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-yellow-600 "}>
        <SiCss3 />
      </span>
      <span className={LogoText}>CSS</span>
    </Logo>
  );
};
export const Vim = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-green-500 "}>
        <SiVim />
      </span>
      <span className={LogoText}>vimscript</span>
    </Logo>
  );
};
export const Html = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-red-700 "}>
        <SiHtml5 />
      </span>
      <span className={LogoText}>HTML</span>
    </Logo>
  );
};
export const Js = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-yellow-400 "}>
        <DiJavascript1 />
      </span>
      <span className={LogoText}>Js</span>
    </Logo>
  );
};
export const Git = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-gray-100 "}>
        <SiGithub />
      </span>
      <span className={LogoText}>Git and Github</span>
    </Logo>
  );
};

export const GitLogo = () => {
  return (
    <div className={Logo2}>
      <span className={Icon2 + " text-gray-100 "}>
        <SiGithub />
      </span>
    </div>
  );
};
export const ExternalLinkLogo = () => {
  return (
    <div className={Logo2}>
      <span className={Icon2 + " text-blue-400 "} >
        <RiExternalLinkLine />
      </span>
    </div >
  );
};
export const Handle = () => {
  return (
    <div className={Logo2}>
      <span className={Icon2 + " text-blue-400 "} >
        <CgProfile />
      </span>
    </div >
  );
};

export const Terminal = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-purple-500 "}>
        <BsFillTerminalFill />
      </span>
      <span className={LogoText}>Terminal</span>
    </Logo>
  );
};
export const Neovim = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-green-400 "}>
        <SiNeovim />
      </span>
      <span className={LogoText}>Neovim</span>
    </Logo>
  );
};
export const Sublime = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-yellow-600 "}>
        <SiSublimetext />
      </span>
      <span className={LogoText}>Sublime</span>
    </Logo>
  );
};
export const Jetbrains = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-black"}>
        <SiJetbrains />
      </span>
      <span className={LogoText}>Jetbrains</span>
    </Logo>
  );
};
export const Vs = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-700 "}>
        <SiVisualstudio />
      </span>
      <span className={LogoText}>Vs code</span>
    </Logo>
  );
};

export const CF = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-gray-800 "}>
        <SiCodeforces />
      </span>
      <span className={LogoText}>Cf</span>
    </Logo>
  );
};

export const CC = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-yellow-800 "}>
        <SiCodechef />
      </span>
      <span className={LogoText}>CC</span>
    </Logo>
  );
};

export const USACO = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-indigo-700 "}>
        <SiHappycow />
      </span>
      <span className={LogoText}>USACO</span>
    </Logo>
  );
};
export const CA = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-500 "}>
        <SiCodecademy />
      </span>
      <span className={LogoText}>CA</span>
    </Logo>
  );
};
export const DS = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-blue-500 "}>
        <FcTreeStructure />
      </span>
      <span className={LogoText}>Data Structure and algorithm</span>
    </Logo>
  );
};
export const Shells = () => {
  return (
    <Logo className={LogoClass}>
      <span className={Icon + " text-gray-400 "}>
        <SiPowershell />
      </span>
      <span className={LogoText}>Shells</span>
      <span className="italic font-light">(fish, zsh, bash)</span>
    </Logo>
  );
};
