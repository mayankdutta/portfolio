import React from "react";
import Card from "../../components/card/index.jsx";
import {} from "../../components/styledComponents/index.jsx";
import styled from "styled-components";
import tw from "twin.macro";
import { CF, CC, USACO, CA } from "../../components/logo/index.jsx";

const SubContent = styled.div`
  min-width: 40vw;
  ${tw`
  grid
  grid-cols-1
  gap-y-4
  
  md:grid
  md:grid-cols-1
  md:gap-y-6
  
  lg:grid
  lg:grid-cols-2
  lg:gap-y-8
`};
`;
const App = () => {
  return (
    <>
      <SubContent>
        <Card
          name="codeforces"
          link="https://play-lh.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ"
          href="https://codeforces.com/profile/WhatIf"
          content={
            <div>
              <h1>
                - Needs no introduction, Most popular problem solving site out
                there.
              </h1>
              <h1>
                - Though I had hard luck with codeforces rating, still tyring
                hard.
              </h1>
            </div>
          }
        />
        <Card
          name="Atcoder"
          link="https://img.atcoder.jp/assets/atcoder.png"
          href="https://atcoder.jp/users/whatif"
          content={
            <div>
              <h1>- This one is my favorite there.</h1>
              <h1>- Short and crisp problem statement.</h1>
              <h1>
                - This one is even best for if one trying to hold good grasp
                over Data structures + some taste of mathematics imo.
              </h1>
            </div>
          }
        />
        <Card
          name="Codechef"
          link="data:image/jpeg;base64,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"
          href="https://www.codechef.com/users/sharma_vikrant"
          content={
            <div>
              <h1>- Love the way they provide editorial</h1>
              <h1>
                - Though I am not that active on codechef, but still manage to
                give contests
              </h1>
              <h1>- Still having hard luck with long contests</h1>
            </div>
          }
        />
        <Card
          name="My HandBook"
          link="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
          href="https://github.com/mayankdutta/Examples"
          content={
            <div>
              <h1>
                - Consist my templates, mistakes and good question of course
              </h1>
              <h1>- Will be turning this to a blog, soon</h1>
              <h1>
                - Problems are from various OJ like USACO, CF, CC, AC, UVA, CSES
                <span className="flex flex-wrap">
                  <CF /> <USACO /> <CC /> <CA />
                </span>
              </h1>
            </div>
          }
        />
      </SubContent>
    </>
  );
};

export default App;
