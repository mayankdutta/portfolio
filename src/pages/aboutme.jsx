import React from "react";
import ProgressBar from "../components/progressBar/index.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  SubHeading,
  Content,
  SubContent,
} from "../components/styledComponents/index.jsx";

import { Skills } from "../profileInfo";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>1. </SerialNo> Few words about me.
      </Heading>
      <HiddenHeading> about me</HiddenHeading>
      <Content>
        <SubContent className="">
          <SubHeading className="my-2">Current Status.</SubHeading>
          <ul className="ml-8 list-disc">
            <li> Btech, Jamia Millia islamia</li>
            <li> Exploring realm of web with ReactJs, VanillaJs, Sass</li>{" "}
            <li> problem solver</li>
            <li> learning UI, UX.</li>
            <li> Exploring (Neo)vim, js, Linux.</li>
          </ul>
        </SubContent>
        <SubContent className="">
          <SubHeading>My Skills</SubHeading>
          {Skills.map((skill, index) => {
            return (
              <ProgressBar width={skill.width} language={skill.language} />
            );
          })}
        </SubContent>
      </Content>
    </>
  );
};

export default App;
