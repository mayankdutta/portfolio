import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ProblemSolving from "./problemSolving.jsx";
import Development from "./development.jsx";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
} from "../../components/styledComponents/index.jsx";

const style = "text-4xl tracking-wide font-medium border-4 border-gray-800";

const Button = styled.div`
  ${tw`
flex
flex-wrap
justify-center
space-x-4
border-4
border-red-800
`}
`;

export const Pages = styled.div`
  ${tw`
  h-screen
  w-screen
  px-20
  py-8
  my-8
`};
`;

const App = () => {
  const [rendercp, setRendercp] = useState(true);
  const [currStyleCp, setCurrStyleCp] = useState(style);
  const [currStyleDevelopment, setCurrStyleDevelopment] = useState(style);
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Spend most of the time with.
      </Heading>
      <HiddenHeading> Projects </HiddenHeading>
      <Content>
        <Button>
          <div
            className={currStyleCp}
            onClick={() => {
              setRendercp(true);
              setCurrStyleCp(currStyleCp + " bg-gray-400");
              setCurrStyleDevelopment(style);
            }}
          >
            ProblemSolving
          </div>
          <div
            className={currStyleDevelopment}
            onClick={() => {
              setRendercp(false);
              setCurrStyleCp(style);
              setCurrStyleDevelopment(currStyleDevelopment + " bg-gray-400");
            }}
          >
            Development
          </div>
        </Button>
        <Pages>{rendercp ? <ProblemSolving /> : <Development />}</Pages>
      </Content>
    </>
  );
};

export default App;
