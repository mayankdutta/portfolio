import React from "react";
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
        <SerialNo>1. </SerialNo> A little about me.
      </Heading>
      <HiddenHeading> about </HiddenHeading>
      <Content>
        <SubContent>
          <SubHeading>Hello</SubHeading>
          one hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello
        </SubContent>
        <SubContent>
          <SubHeading>My Skills</SubHeading>
          two hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello hello hello hello hello hello
          hello hello hello hello hello hello
        </SubContent>
      </Content>
    </>
  );
};

export default App;
