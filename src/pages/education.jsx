import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  SubHeading,
  Content,
  SubContent,
} from "../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>3. </SerialNo>Education
      </Heading>
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
