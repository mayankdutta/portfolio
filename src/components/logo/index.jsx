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

const LogoClass =
  " group hover:bg-" +
  THEME.logo.hover.background +
  " hover:text-" +
  THEME.logo.hover.color;

const LogoText =
  "text-" +
  THEME.logo.color +
  " group-hover:text-" +
  THEME.logo.hover.group.color;

export const Cpp = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-700 mx-2"}>
        <SiCplusplus />
      </span>
      <span className={LogoText}>C++</span>
    </Logo>
  );
};
export const ReactJs = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-800 mx-2"}>
        <SiReact />
      </span>
      <span className={LogoText}>ReactJs</span>
    </Logo>
  );
};
export const Bootstrap = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-purple-700 mx-2"}>
        <SiBootstrap />
      </span>
      <span className={LogoText}>Bootstrap</span>
    </Logo>
  );
};
export const Bash = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-purple-800 mx-2"}>
        <SiGnubash />
      </span>
      <span className={LogoText}>Bash</span>
    </Logo>
  );
};
export const Tailwind = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-600 mx-2"}>
        <SiTailwindcss />
      </span>
      <span className={LogoText}>Tailwind</span>
    </Logo>
  );
};
export const Css = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-yellow-600 mx-2"}>
        <SiCss3 />
      </span>
      <span className={LogoText}>CSS</span>
    </Logo>
  );
};
export const Vim = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-green-700 mx-2"}>
        <SiVim />
      </span>
      <span className={LogoText}>vimscript</span>
    </Logo>
  );
};
export const Html = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-red-700 mx-2"}>
        <SiHtml5 />
      </span>
      <span className={LogoText}>HTML</span>
    </Logo>
  );
};
export const Js = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-yellow-800 mx-2"}>
        <DiJavascript1 />
      </span>
      <span className={LogoText}>Js</span>
    </Logo>
  );
};
export const Git = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiGithub />
      </span>
      <span className={LogoText}>Git and Github</span>
    </Logo>
  );
};
export const Terminal = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-purple-800 mx-2"}>
        <BsFillTerminalFill />
      </span>
      <span className={LogoText}>Terminal</span>
    </Logo>
  );
};
export const Neovim = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-green-700 mx-2"}>
        <SiNeovim />
      </span>
      <span className={LogoText}>Neovim</span>
    </Logo>
  );
};
export const Sublime = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-yellow-600 mx-2"}>
        <SiSublimetext />
      </span>
      <span className={LogoText}>Sublime</span>
    </Logo>
  );
};
export const Jetbrains = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiJetbrains />
      </span>
      <span className={LogoText}>Jetbrains</span>
    </Logo>
  );
};
export const Vs = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-700 mx-2"}>
        <SiVisualstudio />
      </span>
      <span className={LogoText}>Visual studio code</span>
    </Logo>
  );
};

export const CF = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiCodeforces />
      </span>
      <span className={LogoText}>Cf</span>
    </Logo>
  );
};

export const CC = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-yellow-800 mx-2"}>
        <SiCodechef />
      </span>
      <span className={LogoText}>CC</span>
    </Logo>
  );
};

export const USACO = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-indigo-700 mx-2"}>
        <SiHappycow />
      </span>
      <span className={LogoText}>USACO</span>
    </Logo>
  );
};
export const CA = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <SiCodecademy />
      </span>
      <span className={LogoText}>CA</span>
    </Logo>
  );
};
export const DS = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <FcTreeStructure />
      </span>
      <span className={LogoText}>Data Structure and algorithm</span>
    </Logo>
  );
};
export const Shells = () => {
  return (
    <Logo className={LogoClass}>
      <span className={"text-4xl list-none text-gray-700 mx-2"}>
        <SiPowershell />
      </span>
      <span className={LogoText}>Shells</span>
      <span className="italic font-light">(fish, zsh, bash)</span>
    </Logo>
  );
};
