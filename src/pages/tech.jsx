import React from "react";
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
  Icons,
} from "../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>2.</SerialNo>Tech, I am familiar with
      </Heading>
      <HiddenHeading>TechStack</HiddenHeading>
      <Icons>
        <Cpp />
        <ReactJs />
        <Html />
        <Css />
        <Js />
        <Tailwind />
        <Bash />
        <Bootstrap />
        <Vim />
      </Icons>
    </>
  );
};

export default App;
