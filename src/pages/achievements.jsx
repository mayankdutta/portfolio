import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  MainHeading,
  Content,
  SubContent,
} from "../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Achievements
      </Heading>
      <HiddenHeading>A new high </HiddenHeading>
      <Content className="">
        <SubContent className="lg:w-2/3">
          <MainHeading> - Rank 1578 </MainHeading>
          Google kickStart, Round E 2021
        </SubContent>
        <SubContent className="lg:w-2/3">
          <MainHeading> - Rank 334 </MainHeading>
          Codechef August Lunchtime 2021 Division 2
        </SubContent>
        <SubContent className="lg:w-2/3">
          <MainHeading> - Rank 1916</MainHeading>
          AtCoder beginner conteset(ABC) Rank 1916
        </SubContent>
        <SubContent className="lg:w-2/3">
          <MainHeading> - Round 6</MainHeading>
          eyantra organized by IIT Bombay, Team contest
        </SubContent>
      </Content>
    </>
  );
};

export default App;
