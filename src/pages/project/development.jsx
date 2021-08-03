import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../../components/card/index.jsx";
import {} from "../../components/styledComponents/index.jsx";
import {
  Tailwind,
  ReactJs,
  Neovim,
  Vim,
  Bootstrap,
} from "../../components/logo/index.jsx";

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
          name="Google keep"
          link="https://www.google.com/images/icons/product/keep-512.png"
          href="https://github.com/mayankdutta/google-keep-clone"
          content={
            <div>
              <h1>- This one is the clone of Google keep.</h1>
              <h1>- Allows user to store their notes</h1>
              <h1>- Can also be used as a TODO list</h1>
              <h1>
                - Tech stack
                <span className="flex">
                  <Tailwind /> <ReactJs />
                </span>
              </h1>
            </div>
          }
        />
        <Card
          name="Stalker"
          link="https://static.toiimg.com/thumb/84268058.cms?width=680&height=512&imgsize=93489"
          href="https://github.com/mayankdutta/stalker"
          content={
            <div>
              <h1>- Fetches user data from various famous online judges</h1>
              <h1>- Present user stats in graphs and tabular form.</h1>
              <h1>- Help user to guage his abilities.</h1>
              <h1>
                - Tech stack
                <span className="flex">
                  <Tailwind /> <ReactJs />
                </span>
              </h1>
            </div>
          }
        />
        <Card
          name="RTO"
          link="https://pbs.twimg.com/profile_images/1137634760879034369/BAJJJ13E_400x400.jpg"
          href="https://github.com/team-rto/RTO_web_Project"
          content={
            <div>
              <h1>
                - As the name implies, this allow user to
                <ul className="ml-2">
                  <li>-- Fill details</li>
                  <li>-- Register/Login</li>
                  <li>-- Get his driving license</li>
                  <li>-- Get his RC</li>
                </ul>
              </h1>
              <h1>- I handled the UI/UX of the site</h1>
              <h1>
                - Tech stack
                <span className="flex">
                  <Tailwind /> <Bootstrap />
                </span>
              </h1>
            </div>
          }
        />
        <Card
          name="LunarVim"
          link="https://repository-images.githubusercontent.com/145050544/3387d880-dc4f-11eb-8ecf-609ba3ec8a40"
          href="https://github.com/ChristianChiarulli/LunarVim"
          content={
            <div>
              <h1>
                - All this you are seeing wouldn't be possible if it weren't for
                this editor
              </h1>
              <h1>
                - Needless to say, Vim is the most productive text editor, I
                ever used
              </h1>
              <h1>
                - LunarVim is just a layer of sane config which I think anyone
                can admire
              </h1>
              <h1>- I sometime spend days configuring Vim</h1>
              <h1>
                would you like to see my
                <a
                  href="https://github.com/mayankdutta/.config/"
                  className="text-blue-700"
                >
                  Config
                </a>
                <span className="flex">
                  <Neovim /> <Vim />
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
