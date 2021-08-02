import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Content = styled.div`
  ${tw`
   h-full flex flex-col flex-grow justify-center items-center
`};
`;

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

const App = () => {
  return (
    <>
      <Content>
        <Heading>Mayank Dutta</Heading>
        <SubHeading>
    doing something doing something doing something doing something 
        </SubHeading>
      </Content>
    </>
  );
};

export default App;
