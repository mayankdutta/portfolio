import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Heading = styled.div`
  ${tw`
  text-7xl
  font-light
`};
`;

const SerialNo = styled.span`
  ${tw`
  text-9xl
  font-extrabold
`};
`;

const HiddenHeading = styled.div`
  position: relative;
  bottom: 5.5rem;
  left: 10rem;
  z-index: -1;
  ${tw`
  text-9xl
  inline-flex
  tracking-widest
  font-extrabold
  text-gray-300
`};
`;

const SubHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wide
  font-medium
`};
`;

const Content = styled.div`
  ${tw`
flex 
flex-wrap
space-x-4
`}
`;

const SubContent = styled.div`
  min-width: 40vw;
  max-width: 40vw;
  ${tw`
`};
`;

const App = () => {
  return (
    <>
      <Heading> <SerialNo>2.</SerialNo>Tech i am familiar with</Heading>
    <HiddenHeading>Tech Stack</HiddenHeading>
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
          <SubHeading>Skills</SubHeading>
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
