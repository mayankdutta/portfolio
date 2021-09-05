import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../../components/card/index.jsx";
import { styleProjectMiniIcons } from "../../components/styledComponents/index.jsx";
import { THEME } from "../../colorscheme/index.jsx";
import {
  Tailwind,
  ReactJs,
  Neovim,
  Vim,
  Bootstrap,
  GitLogo,
  ExternalLinkLogo
} from "../../components/logo/index.jsx";

import keep from "../../assets/keep.png";
import stalker from "../../assets/stalker.jpeg";
import rto from "../../assets/rto.jpg";
import lvim from "../../assets/lvim.png";

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
      <SubContent>
        <Card
          name="Google keep"
          link={keep}
          source={<GitLogo />}
          source2={<ExternalLinkLogo />}
          sourceLink="https://github.com/mayankdutta/google-keep-clone"
          sourceLink2="https://github.com/mayankdutta/google-keep-clone"
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>Google keep</li>
              <li> This one is the clone of Google keep.</li>
              <li> Allows user to store their notes</li>
              <li> Can also be used as a TODO list</li>
              <li>
                Tech stack
                <span className={styleProjectMiniIcons}>
                  <Tailwind /> <ReactJs />
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="Stalker"
          link={stalker}
          source={<GitLogo />}
          source2={<ExternalLinkLogo />}
          sourceLink="https://github.com/mayankdutta/stalker"
          sourceLink2="https://mayankdutta.github.io/stalker/"
          content={
            <ul class="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>Stalker</li>
              <li> Fetches user data from various famous online judges</li>
              <li> Present user stats in graphs and tabular form.</li>
              <li> Help user to guage his abilities.</li>
              <li>
                Tech stack
                <span className={styleProjectMiniIcons}>
                  <Tailwind /> <ReactJs />
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="RTO"
          link={rto}
          source={<GitLogo />}
          source2={<ExternalLinkLogo />}
          sourceLink="https://github.com/team-rto/RTO_web_Project"
          sourceLink2="https://github.com/team-rto/RTO_web_Project"
          content={
            <ul className="list-disc list-outside ml-2">
              <li style={title} className={titleClass}>RTO</li>
              <li>
                This project I developed in
                <span style={{ color: THEME.text.subHeading }} className="mx-2">
                  Team
                </span>
                as part of college project.
              </li>

              <li>
                As the name implies, this allow user to
                <ul className="ml-2 list-decimal list-outside">
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    Fill details.
                  </li>
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    Register / login.
                  </li>
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    Get his driving license preview.
                  </li>
                  <li style={{ color: THEME.text.subHeading }} className="mx-2">
                    Get his RC preview.
                  </li>
                </ul>
              </li>
              <li> I handled the UI/UX of the site</li>
              <li>
                Tech stack
                <span className={styleProjectMiniIcons}>
                  <Tailwind /> <Bootstrap />
                </span>
              </li>
            </ul>
          }
        />
        <Card
          name="LunarVim"
          link={lvim}
          source={<GitLogo />}
          source2={<ExternalLinkLogo />}
          sourceLink="https://github.com/ChristianChiarulli/LunarVim"
          sourceLink2="https://github.com/mayankdutta/.config"
          content={
            <ul className="  list-disc list-outside ml-2">
              <li style={title} className={titleClass}>LunarVim</li>
              <li>
                All this you are seeing wouldn't be possible if it weren't for
                this editor
              </li>
              <li>
                Needless to say, Vim is the most productive text editor, I ever
                used
              </li>
              <li>
                LunarVim is just a layer of sane config which I think anyone can
                admire
              </li>
              <li> I sometime spend days configuring Vim</li>
              <li>
                would you like to see my
                <a
                  href="https://github.com/mayankdutta/.config/"
                  className="ml-2 text-blue-700"
                >
                  config
                </a>
                <span className={styleProjectMiniIcons}>
                  <Neovim /> <Vim />
                </span>
              </li>
            </ul>
          }
        />
      </SubContent>
    </>
  );
};

export default App;
