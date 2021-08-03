import React, { useState } from "react";
import ProblemSolving from "./problemSolving.jsx";
import Development from "./development.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
  ButtonLarge,
} from "../../components/styledComponents/index.jsx";

const style =
  " text-base md:text-xl lg:text-2xl  font-medium tracking-wide rounded-2xl p-4 border-4 border-gray-400";

const App = () => {
  const [rendercp, setRendercp] = useState(true);
  const [currStyleCp, setCurrStyleCp] = useState(style + " bg-gray-400 ");
  const [currStyleDevelopment, setCurrStyleDevelopment] = useState(style);
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Spend most of the time with.
      </Heading>
      <HiddenHeading> Projects </HiddenHeading>
      <Content>
        <ButtonLarge>
          <div
            className={currStyleCp}
            onClick={() => {
              setRendercp(true);
              setCurrStyleCp(style + "  bg-gray-400 ");
              setCurrStyleDevelopment(style);
            }}
          >
            Problem Solving
          </div>
          <div
            className={currStyleDevelopment}
            onClick={() => {
              setRendercp(false);
              setCurrStyleCp(style);
              setCurrStyleDevelopment(style + "  bg-gray-400 ");
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
