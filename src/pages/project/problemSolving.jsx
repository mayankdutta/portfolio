import React from "react";
import Card from "../../components/card/index.jsx";
import { } from "../../components/styledComponents/index.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import { THEME } from "../../colorscheme/index.jsx";

import cf from "../../assets/cf.png"
import cc from "../../assets/cc.png"
import ac from "../../assets/ac.png"
import github from "../../assets/github.png"
import hackerrank from "../../assets/hackerrank.png"

const SubContent = styled.div`
  min-width: 40vw;
  ${tw`
  grid
  grid-cols-1
  gap-y-4
`};
`;
// const CustomBorder = { borderBottom: "2px solid #8c8c8c" };

const title = {
  color: "#5AE87C",
  textDecoration: "none",
  listStyle: "none",
}
const titleClass = "md:text-xl lg:text-3xl font-mono tracking-wider my-2";

const App = () => {
  return (
    <>
      <SubContent>
        <Card
          name="codeforces"
          link={cf}
          source="handle"
          source2=""
          sourceLink="https://codeforces.com/profile/WhatIf"
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>Codeforces</li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  Pupil (1398)
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  4165
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  20
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="Atcoder"
          link={ac}
          sourceLink="https://atcoder.jp/users/whatif"
          source="handle"
          source2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>Atcoder</li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  Brown (434)
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  1916
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  9
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="Codechef"
          link={cc}
          sourceLink="https://www.codechef.com/users/sharma_vikrant"
          source="handle"
          source2=""
          content={
            <ul className="list-disc  list-outside ml-2">
              <li style={title} className={titleClass}>Codechef</li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  4-star (1853)
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  334
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  21
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="My HandBook"
          link={github}
          sourceLink="https://github.com/mayankdutta/Examples"
          source="handle"
          source2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>My handbook</li>
              <li>
                Consist my
                <ul className="list-disc list-outside ml-2">
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    tempalates
                  </li>
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    Mistakes
                  </li>
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    good questions
                  </li>
                </ul>
              </li>
              <li>
                Problems are from various OJ like USACO, CF, CC, AC, UVA, CSES
              </li>
            </ul>
          }
        />
      </SubContent>
    </>
  );
};

export default App;
