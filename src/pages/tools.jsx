import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Icon,
  Icons,
} from "../components/styledComponents/index.jsx";

import { SiNeovim } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { SiVisualstudio } from "react-icons/si";
import { SiSublimetext } from "react-icons/si";
import { SiJetbrains } from "react-icons/si";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>5. </SerialNo> Tools Under my Belt
      </Heading>
      <HiddenHeading> Tools </HiddenHeading>
      <Icons>
        <Icon>
          <SiGithub />
        </Icon>
        Github
        <Icon>
          <BsFillTerminalFill />
        </Icon>
        Command Line
        <Icon>
          <SiVisualstudio />
        </Icon>
        Visual studio code
        <Icon>
          <SiSublimetext />
        </Icon>
        Sublime text
        <Icon>
          <SiJetbrains />
        </Icon>
        Jetbrains
        <Icon>
          <SiNeovim />
        </Icon>
        NeoVim
      </Icons>
    </>
  );
};

export default App;
