import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
} from "../components/styledComponents/index.jsx";
import RankingCard from "../components/rankCard/index.jsx";
import { allAchievements } from "../profileInfo.js";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Achievements
      </Heading>
      <HiddenHeading>A new high </HiddenHeading>
      <Content className="">
        {allAchievements.map((element, index) => {
          return <RankingCard key={index} achievement={element} />;
        })}
      </Content>
    </>
  );
};

export default App;
