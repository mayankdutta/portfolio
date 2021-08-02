import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Heading = styled.div`
  ${tw`
  text-3xl

`};
`;

const SubHeading = styled.div`
  ${tw`
  text-xl

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
      <Heading> Tech i am familiar with</Heading>
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
