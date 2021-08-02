import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Cpp,
  ReactJs,
  Html,
  Css,
  Tailwind,
  Bootstrap,
  Vim,
  Bash,
  Js,
} from "../components/logo/index.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
} from "../components/styledComponents/index.jsx";

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
        <SerialNo>2.</SerialNo>Tech, I am familiar with
      </Heading>
      <HiddenHeading>Tech Stack</HiddenHeading>
      <Logos>
        <Cpp />
        <ReactJs />
        <Html />
        <Css />
        <Js />
        <Tailwind />
        <Bash />
        <Bootstrap />
        <Vim />
      </Logos>
    </>
  );
};

export default App;
