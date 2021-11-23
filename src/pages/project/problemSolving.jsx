import React from "react";
import Card from "../../components/card/index.jsx";
import {} from "../../components/styledComponents/index.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import { THEME } from "../../colorscheme/index.jsx";

import cf from "../../assets/cf.png";
import cc from "../../assets/cc.png";
import ac from "../../assets/ac.png";
import github from "../../assets/github.png";
import hackerrank from "../../assets/hackerrank.png";
import cses from "../../assets/cses.png";
import lc from "../../assets/lc.png";
import { Handle } from "../../components/logo/index.jsx";
import {
  Codeforces,
  Atcoder,
  Codechef,
  Leetcode,
  Hackerrank,
} from "../../profileInfo";

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
};
const titleClass = "md:text-xl lg:text-3xl font-mono tracking-wider my-2";

const App = () => {
  return (
    <>
      <SubContent>
        <Card
          name="codeforces"
          link={cf}
          source={<Handle />}
          source2=""
          sourceLink="https://codeforces.com/profile/WhatIf"
          sourceLink2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>
                Codeforces
              </li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Codeforces.rating}
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Codeforces.rank}
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Codeforces.contestGiven}
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="Atcoder"
          link={ac}
          sourceLink="https://atcoder.jp/users/whatif"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>
                Atcoder
              </li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Atcoder.rank} ({Atcoder.rating})
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  1532
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Atcoder.contestGiven}
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="CodeChef"
          link={cc}
          sourceLink="https://www.codechef.com/users/sharma_vikrant"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc  list-outside ml-2">
              <li style={title} className={titleClass}>
                CodeChef
              </li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Codechef.star.map((value, index) => {
                    return <span>⭐</span>;
                  })}
                  <span className="ml-2">(Rating: {Codechef.rating})</span>
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  223
                </span>
              </li>
              <li>
                contest given
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Codechef.ContestGiven}
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="Leetcode"
          link={lc}
          sourceLink="https://leetcode.com/mynk_shrma/"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc  list-outside ml-2">
              <li style={title} className={titleClass}>
                Leetcode
              </li>
              <li>
                Highest Rating:
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  {Leetcode.rating}
                </span>
              </li>
              <li>
                Highest Rank
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
            {Leetcode.rank}
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="CSES"
          link={cses}
          sourceLink="https://cses.fi/user/27362"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc  list-outside ml-2">
              <li style={title} className={titleClass}>
                CSES
              </li>
              <li>
                Problem solved
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  67
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="HackerRank"
          link={hackerrank}
          sourceLink="https://www.hackerrank.com/mynk_shrma"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc  list-outside ml-2">
              <li style={title} className={titleClass}>
                HackerRank
              </li>
              <table>
                <tr>
                  <td>- Problem solving</td>
                  <td>
                    <span
                      style={{ color: THEME.text.subHeading }}
                      className="mx-2"
                    >
                      {Hackerrank.star.problemSolving.map((value, index) => {
                        return <span>⭐</span>;
                      })}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>- C++</td>
                  <td>
                    <span
                      style={{ color: THEME.text.subHeading }}
                      className="mx-2"
                    >
                      {Hackerrank.star.cpp.map((value, index) => {
                        return <span>⭐</span>;
                      })}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>- Java</td>
                  <td>
                    <span
                      style={{ color: THEME.text.subHeading }}
                      className="mx-2"
                    >
                      {Hackerrank.star.java.map((value, index) => {
                        return <span>⭐</span>;
                      })}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>- JS</td>
                  <td>
                    <span
                      style={{ color: THEME.text.subHeading }}
                      className="mx-2"
                    >
                      {Hackerrank.star.js.map((value, index) => {
                        return <span>⭐</span>;
                      })}
                    </span>
                  </td>
                </tr>
              </table>
            </ul>
          }
        />
        <Card
          name="My HandBook"
          link={github}
          sourceLink="https://github.com/mayankdutta/Examples"
          source={<Handle />}
          source2=""
          sourceLink2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>
                My handbook
              </li>
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
                Problems are from various OJ like <br />
                USACO, CF, CC, AC, UVA, CSES
              </li>
            </ul>
          }
        />
      </SubContent>
    </>
  );
};

export default App;
