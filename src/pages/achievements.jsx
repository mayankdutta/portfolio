import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
} from "../components/styledComponents/index.jsx";
import RankingCard from "../components/rankCard/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>4. </SerialNo> Achievements
      </Heading>
      <HiddenHeading>A new high </HiddenHeading>
      <Content className="">
        <RankingCard rank={"- Rank 1578"}
          link="https://codingcompetitions.withgoogle.com/kickstart/round/000000000043585c"
          content=" Google kickStart, "
          linkText="Round E 2021" />
        <RankingCard rank="- Rank 223"
          link="https://www.codechef.com/rankings/START10B"
          content=" Codechef "
          linkText="Starters 10 div 2" />
        <RankingCard rank="- Rank 1532"
          link="https://atcoder.jp/contests/abc223/standings?watching=whatif"
          content=" AtCoder beginner conteset(ABC) "
          linkText="Contest 223" />
        <RankingCard rank="- Round 6"
          link="https://drive.google.com/file/d/13N9rBrIDZpOIWY719BIWyGijejQZCx7m/view?usp=sharing"
          content=" Eyantra organized by IIT Bombay, Team contest, competed till "
          linkText="Round 6" />
        <RankingCard rank="- Rank 1925"
          link="https://codeforces.com/submissions/WhatIf/contest/1579"
          content="Codeforces "
          linkText="Round #744 (Div. 3)	" />
      </Content>
    </>
  );
};

export default App;
