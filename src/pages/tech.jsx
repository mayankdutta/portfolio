import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
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
border-gray-400

font-sans
font-medium

hover:border-blue-400
hover:text-blue-400
hover:shadow
`};
`;

const Logos = styled.div`
  ${tw`
flex
flex-wrap
space-x-4
space-y-4
justify-center
px-16
`};
`;

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>2.</SerialNo>Tech i am familiar with
      </Heading>
      <HiddenHeading>Tech Stack</HiddenHeading>
      <Logos>
        <Logo>
          <Icon>
            <SiCplusplus />
          </Icon>
          C++
        </Logo>
        <Logo>
          <Icon>
            <DiJavascript1 />
          </Icon>
          Js
        </Logo>
        <Logo>
          <Icon>
            <SiReact />
          </Icon>
          ReactJs
        </Logo>
        <Logo>
          <Icon>
            <SiTailwindcss />
          </Icon>
          Tailwind
        </Logo>
        <Logo>
          <Icon>
            <SiBootstrap />
          </Icon>
          Bootstrap
        </Logo>
        <Logo>
          <Icon>
            <SiGnubash />
          </Icon>
          Bash
        </Logo>
        <Logo>
          <Icon>
            <SiVim />
          </Icon>
          vimscript
        </Logo>
        <Logo>
          <Icon>
            <SiCss3 />
          </Icon>
          CSS
        </Logo>
        <Logo>
          <Icon>
            <SiHtml5 />
          </Icon>
          HTML
        </Logo>
      </Logos>
    </>
  );
};

export default App;
