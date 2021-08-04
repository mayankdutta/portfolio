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
  " text-base md:text-xl lg:text-2xl  font-medium tracking-wide rounded-2xl p-4 border-4 border-gray-900";

const App = () => {
  const [rendercp, setRendercp] = useState(true);
  const [currStyleCp, setCurrStyleCp] = useState(
    style + " bg-gray-900 text-white"
  );
  const [currStyleDevelopment, setCurrStyleDevelopment] = useState(
    style + " hover:bg-indigo-900 hover:text-white"
  );
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
              setCurrStyleCp(style + "  bg-gray-900  text-white");
              setCurrStyleDevelopment(
                style + " hover:bg-indigo-900 hover:text-white"
              );
            }}
          >
            Problem Solving
          </div>
          <div
            className={currStyleDevelopment}
            onClick={() => {
              setRendercp(false);
              setCurrStyleCp(style + " hover:bg-indigo-900 hover:text-white");
              setCurrStyleDevelopment(style + "  bg-gray-900  text-white");
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
