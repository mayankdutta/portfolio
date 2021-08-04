import React from "react";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
  SubContent,
  SubHiddenHeading,
  MainHeading,
  MinorHeading,
} from "../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>3. </SerialNo>Education
      </Heading>
      <HiddenHeading>Education</HiddenHeading>
      <Content>
        <SubContent>
          <SubHiddenHeading>
            Little Flowers public sr. sec. school
          </SubHiddenHeading>
          <div className="tracking-wider text-xs md:text-sm lg:text-sm font-medium">
            Class 10th: 10CGPA
          </div>
          <div className="tracking-wider text-xs md:text-sm lg:text-sm font-medium">
            Class 12th: 88.8%
          </div>
        </SubContent>
      </Content>
      <Content>
        <SubContent>
          <MinorHeading>Faculty of Engineering</MinorHeading>
          <MainHeading>Jamia Millia Islamia</MainHeading>
          <span className="tracking-wider font-bold">
            B.tech in Electrical Engineering
          </span>
          <span className="italic tracking-widest">(major) </span>
          <span className="tracking-wider font-bold">and computer science</span>
          <span className="italic tracking-widest">(minor)</span>
          <div className="tracking-wider text-sm font-medium">
            Expected 2023
          </div>
          <div className="tracking-wider text-sm font-medium">
            GPA till now: 8.57
          </div>
        </SubContent>
      </Content>
    </>
  );
};

export default App;
