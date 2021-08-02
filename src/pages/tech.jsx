import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Icons,
  Icon,
} from "../components/styledComponents/index.jsx";
import { SiCplusplus } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiVim } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>2.</SerialNo>Tech i am familiar with
      </Heading>
      <HiddenHeading>Tech Stack</HiddenHeading>
      <Icons>
        <Icon>
          <SiCplusplus />
        </Icon>
        C++
        <Icon>
          <DiJavascript1 />
        </Icon>
        Js
        <Icon>
          <SiReact />
        </Icon>
        ReactJs
        <Icon>
          <SiTailwindcss />
        </Icon>
        Tailwind
        <Icon>
          <SiBootstrap />
        </Icon>
        Bootstrap
        <Icon>
          <SiGnubash />
        </Icon>
        Bash
        <Icon>
          <SiVim />
        </Icon>
        vimscript
        <Icon>
          <SiCss3 />
        </Icon>
        CSS
        <Icon>
          <SiHtml5 />
        </Icon>
        HTML
      </Icons>
    </>
  );
};

export default App;
