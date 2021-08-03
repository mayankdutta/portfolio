import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Content = styled.div`
  ${tw`
    w-full 

    flex 
    flex-col 

    justify-center
    items-center

`};
`;

const Heading = styled.div`
  ${tw`
  text-xl
  font-light
  flex   
  justify-center 
  items-center

  md:text-2xl
  md:font-light
  md:flex   
  md:justify-center 
  md:items-center

  lg:text-7xl
  lg:font-light
  lg:flex   
  lg:justify-center 
  lg:items-center
`};
`;

const SubHeading = styled.div`
  ${tw`
  text-xs
  font-extralight

  md:text-base
  md:font-extralight
  md:w-96

  lg:text-xl
  lg:font-extralight
  lg:w-96
`};
`;

const App = () => {
  return (
    <Content>
      <Heading>Mayank Dutta</Heading>
      <SubHeading>
        Competitive Programmer, UI/UX designer. I use Vim btw
      </SubHeading>
    </Content>
  );
};

export default App;
