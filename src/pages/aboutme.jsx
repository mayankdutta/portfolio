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

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>1. </SerialNo> Few words about me.
      </Heading>
      <HiddenHeading> about </HiddenHeading>
      <Content>
        <SubContent className="">
          <SubHeading className="my-2">Current Status.</SubHeading>
          <ul className="ml-8 list-disc">
            <li>3rd year, BTech, Jamia Millia islamia</li>
            <li> Exploring realm of web with ReactJs, VanillaJs, Sass</li>
            <li> problem solving in C++/Java.</li>
            <li> learning UI, UX.</li>
            <li> Exploring Vim, js, Linux.</li>
          </ul>
        </SubContent>
        <SubContent className="">
          <SubHeading>My Skills</SubHeading>
          <ProgressBar width="90%" language="C++" />
          <ProgressBar width="60%" language="ReactJs" />
          <ProgressBar width="80%" language="Javascript" />
          <ProgressBar width="50%" language="Shell scripting" />
          <ProgressBar width="93%" language="Data structure and Algorithms" />
        </SubContent>
      </Content>
    </>
  );
};

export default App;
