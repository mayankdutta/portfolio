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
      <Heading> <SerialNo>3. </SerialNo>Education </Heading>
    <HiddenHeading>Education</HiddenHeading>
      <Content>
        <SubContent>
          <SubHeading> Idhar gya </SubHeading>
          <div>Ye kra</div>
          <div>Itne saal tk kra </div>
          <div>krta gya </div>
          <div>Ye seekha </div>
        </SubContent>
      </Content>
      <Content>
        <SubContent>
          <SubHeading> Udhar gya </SubHeading>
          <div>wo kra</div>
          <div>Itne saal tk kra </div>
          <div>krta gya </div>
          <div>Ye seekha </div>
        </SubContent>
      </Content>
      <Content>
        <SubContent>
          <SubHeading> pta ni kaha gya ab </SubHeading>
          <div>wo kra</div>
          <div>Itne saal tk kra </div>
          <div>krta gya </div>
          <div>Ye seekha </div>
        </SubContent>
      </Content>
    </>
  );
};

export default App;
