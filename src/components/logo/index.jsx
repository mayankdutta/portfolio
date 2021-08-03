import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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
} from "react-icons/si";

import { BsFillTerminalFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";

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

text-black

hover:shadow-xl
hover:text-black
hover:font-bold
hover:shadow
`};
`;

export const Cpp = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-700 mx-2"}>
        <SiCplusplus />
      </span>
      C++
    </Logo>
  );
};
export const ReactJs = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-800 mx-2"}>
        <SiReact />
      </span>
      ReactJs
    </Logo>
  );
};
export const Bootstrap = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-purple-700 mx-2"}>
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
      <span className={"text-4xl list-none text-blue-600 mx-2"}>
        <SiTailwindcss />
      </span>
      Tailwind
    </Logo>
  );
};
export const Css = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-600 mx-2"}>
        <SiCss3 />
      </span>
      CSS
    </Logo>
  );
};
export const Vim = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-green-700 mx-2"}>
        <SiVim />
      </span>
      vimscript
    </Logo>
  );
};
export const Html = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-red-700 mx-2"}>
        <SiHtml5 />
      </span>
      HTML
    </Logo>
  );
};
export const Js = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-800 mx-2"}>
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
      <span className={"text-4xl list-none text-purple-800 mx-2"}>
        <BsFillTerminalFill />
      </span>
      Terminal
    </Logo>
  );
};
export const Neovim = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-green-700 mx-2"}>
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
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiJetbrains />
      </span>
      Jetbrains
    </Logo>
  );
};
export const Vs = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-700 mx-2"}>
        <SiVisualstudio />
      </span>
      Visual studio code
    </Logo>
  );
};

export const CF = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-gray-800 mx-2"}>
        <SiCodeforces />
      </span>
      Cf
    </Logo>
  );
};

export const CC = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-yellow-800 mx-2"}>
        <SiCodechef />
      </span>
      CC
    </Logo>
  );
};

export const USACO = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <SiHappycow />
      </span>
      USACO
    </Logo>
  );
};
export const CA = () => {
  return (
    <Logo>
      <span className={"text-4xl list-none text-blue-500 mx-2"}>
        <SiCodecademy />
      </span>
      CA
    </Logo>
  );
};
