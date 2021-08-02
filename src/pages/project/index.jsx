import React from "react";
import ProblemSolving from "./problemSolving.jsx";
import Development from "./development.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
} from "../../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Spend most of the time with.
      </Heading>
      <HiddenHeading> Projects </HiddenHeading>
      <Content>
        <ProblemSolving />
        <Development />
      </Content>
    </>
  );
};

export default App;
