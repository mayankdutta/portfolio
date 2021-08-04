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
        <SubContent className="lg:w-2/3">
          <SubHeading>Hello !</SubHeading>
          My name is Mayank, an Engineering student from India. I design Web and
          problem solving as a hobby. I use (Neo)Vim as my primay IDE and spend
          most of my time on it. I am deeply passionate about software
          engineering and ways to increase productivit always fascinate me.
        </SubContent>
        <SubContent className = "lg:w-2/3">
          <SubHeading>My Skills</SubHeading>
          <ProgressBar width="90%" language="C++" />
          <ProgressBar width="60%" language="ReactJs" />
          <ProgressBar width="80%" language="Javascript" />
          <ProgressBar width="50%" language="Shell scripting" />
        </SubContent>
      </Content>
    </>
  );
};

export default App;
