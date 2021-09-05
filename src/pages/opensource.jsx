import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../components/card/index.jsx";
import { THEME } from "../colorscheme/index.jsx";
import {
  GitLogo,
  ExternalLinkLogo
} from "../components/logo/index.jsx";

import {
  Heading,
  SerialNo,
  HiddenHeading,
} from "../components/styledComponents/index.jsx";

import github from "../assets/github.png";
import usaco from "../assets/usaco.png";

const SubContent = styled.div`
  min-width: 40vw;
  ${tw`
  grid
  grid-cols-1
  gap-y-4
`};
`;

const title = {
  color: "#5AE87C",
  textDecoration: "none",
  listStyle: "none",
}
const titleClass = "md:text-xl lg:text-3xl font-mono tracking-wider my-2";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>5. </SerialNo> Contribution
      </Heading>
      <HiddenHeading> Open source</HiddenHeading>
      <SubContent>
        <Card
          name="Category wise Problems"
          link={github}
          source={<GitLogo />}
          source2=""
          sourceLink="https://github.com/mayankdutta/category-wise-problems"
          sourceLink2=""
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>Category wise problems</li>
              <li> Not just any github solution bank.</li>
              <li> Contributors have to follow certain rules like ... </li>
              <ul className="ml-2 list-decimal list-outside">
                <li style={{ color: THEME.text.subHeading }} className="mx-2">
                  What did you learn from this problem.
                </li>
                <li style={{ color: THEME.text.subHeading }} className="mx-2">
                  what was your approach.
                </li>
                <li style={{ color: THEME.text.subHeading }} className="mx-2">
                  Some instances where you were stuck
                </li>
              </ul>
              <li> Basically this little markdown file has to guide someone with very little knowledge.</li>
            </ul>
          }
        />
        <Card
          name="USACO"
          link={usaco}
          source={<GitLogo />}
          source2={<ExternalLinkLogo />}
          sourceLink="https://github.com/cpinitiative/usaco-guide"
          sourceLink2="https://usaco.guide"
          content={
            <ul class="list-disc list-outside ml-2">
              <li style={title} className={titleClass}> USACO</li>
              <li> Solving problem actively on this platform</li>
              <li> Contributing by correcting buggy code, removing logical / syntax error</li>
            </ul>
          }
        />
      </SubContent>
    </>
  );
};

export default App;
