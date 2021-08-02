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
  text-7xl
  font-light

`};
`;

const SubHeading = styled.div`
  width: 30rem;
  ${tw`
  text-xl
  font-extralight
`};
`;

const App = () => {
  return (
    <>
      <Content>
        <Heading>Mayank Dutta</Heading>
        <SubHeading>
         Competitive Programmer, UI/UX designer. I use Vim btw
        </SubHeading>
      </Content>
    </>
  );
};

export default App;
