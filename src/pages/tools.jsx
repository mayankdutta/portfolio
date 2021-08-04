import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Icons,
} from "../components/styledComponents/index.jsx";
import {
  Neovim,
  Git,
  Vs,
  Jetbrains,
  Sublime,
  Terminal,
  Shells,
} from "../components/logo/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>5. </SerialNo> Tools Under my Belt
      </Heading>
      <HiddenHeading> Tools </HiddenHeading>
      <Icons>
        <Neovim />
        <Git />
        <Sublime />
        <Jetbrains />
        <Terminal />
        <Vs />
        <Shells />
      </Icons>
    </>
  );
};

export default App;
