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
        <SerialNo>1. </SerialNo> A little about me.
      </Heading>
      <HiddenHeading> about </HiddenHeading>
      <Content>
        <SubContent>
          <SubHeading>Hello !</SubHeading>
          My name is Mayank, an Engineering student from India. I design Web and
          problem solving as a hobby. I use (Neo)Vim as my primay IDE and spend
          most of my time on it. I am deeply passionate about software
          engineering and ways to increase productivit always fascinate me.
        </SubContent>
        <SubContent>
          <SubHeading>My Skills</SubHeading>
          // TODO Move it to componenet
          <div className="relative pt-1">
            C++
            <div className="overflow-hidden h-4 mb-4 text-xs flex border-4 border-pink-500 rounded bg-pink-200">
              <div
                style={{ width: "80%" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              ></div>
            </div>
          </div>
        </SubContent>
      </Content>
    </>
  );
};

export default App;
