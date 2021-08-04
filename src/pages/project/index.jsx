import React, { useState } from "react";
import ProblemSolving from "./problemSolving.jsx";
import Development from "./development.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
  ButtonLarge,
  buttonHoverStyle,
  buttonChoosenStyle,
} from "../../components/styledComponents/index.jsx";

const App = () => {
  const [rendercp, setRendercp] = useState(true);
  const [currStyleCp, setCurrStyleCp] = useState(buttonChoosenStyle);
  const [currStyleDevelopment, setCurrStyleDevelopment] =
    useState(buttonHoverStyle);
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Love to spend time with
      </Heading>
      <HiddenHeading> Projects </HiddenHeading>
      <Content>
        <ButtonLarge>
          <div
            className={currStyleCp}
            onClick={() => {
              setRendercp(true);
              setCurrStyleCp(buttonChoosenStyle);
              setCurrStyleDevelopment(buttonHoverStyle);
            }}
          >
            Problem Solving
          </div>
          <div
            className={currStyleDevelopment}
            onClick={() => {
              setRendercp(false);
              setCurrStyleCp(buttonHoverStyle);
              setCurrStyleDevelopment(buttonChoosenStyle);
            }}
          >
            Development
          </div>
        </ButtonLarge>
        {rendercp ? <ProblemSolving /> : <Development />}
      </Content>
    </>
  );
};

export default App;
