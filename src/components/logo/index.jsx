import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SiCplusplus } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiVim } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

import { SiNeovim } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { SiVisualstudio } from "react-icons/si";
import { SiSublimetext } from "react-icons/si";
import { SiJetbrains } from "react-icons/si";

const Logo = styled.div`
  ${tw`
flex
flex-wrap

justify-center
items-center

space-x-4
space-y-4

p-4
border-2
border-transparent

font-sans
font-medium

hover:shadow-xl
hover:text-blue-400
hover:shadow
`};
`;

export const Cpp = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <SiCplusplus />
      </span>
      C++
    </Logo>
  );
};
export const ReactJs = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-600 mx-2"}>
        <SiReact />
      </span>
      ReactJs
    </Logo>
  );
};
export const Bootstrap = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-purple-500 mx-2"}>
        <SiBootstrap />
      </span>
      Bootstrap
    </Logo>
  );
};
export const Bash = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-purple-800 mx-2"}>
        <SiGnubash />
      </span>
      Bash
    </Logo>
  );
};
export const Tailwind = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-300 mx-2"}>
        <SiTailwindcss />
      </span>
      Tailwind
    </Logo>
  );
};
export const Css = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-500 mx-2"}>
        <SiCss3 />
      </span>
      CSS
    </Logo>
  );
};
export const Vim = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-green-500 mx-2"}>
        <SiVim />
      </span>
      vimscript
    </Logo>
  );
};
export const Html = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-red-500 mx-2"}>
        <SiHtml5 />
      </span>
      HTML
    </Logo>
  );
};
export const Js = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-500 mx-2"}>
        <DiJavascript1 />
      </span>
      Js
    </Logo>
  );
};
export const Git = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiGithub />
      </span>
      Git and Github
    </Logo>
  );
};
export const Terminal = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-purple-500 mx-2"}>
        <BsFillTerminalFill />
      </span>
      Terminal
    </Logo>
  );
};
export const Neovim = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-green-500 mx-2"}>
        <SiNeovim />
      </span>
      Neovim
    </Logo>
  );
};
export const Sublime = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-600 mx-2"}>
        <SiSublimetext />
      </span>
      Sublime
    </Logo>
  );
};
export const Jetbrains = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-gray-500 mx-2"}>
        <SiJetbrains />
      </span>
      Jetbrains
    </Logo>
  );
};
export const Vs = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <SiVisualstudio />
      </span>
      Visual studio code
    </Logo>
  );
};
