import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Heading,
  SerialNo,
  HiddenHeading,
  Content,
  SubContent,
} from "../components/styledComponents/index.jsx";

const SubHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wide
  font-light
  text-gray-500
`};
`;

const MainHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wider
  font-light
`};
`;

const MinorHeading = styled.span`
  ${tw`
  text-xl
  tracking-wider
  font-bold
`};
`;

const App = () => {
  return (
    <>
      <Heading>
        <SerialNo>3. </SerialNo>Education
      </Heading>
      <HiddenHeading>Education</HiddenHeading>
      <Content>
        <SubContent>
          <SubHeading> Little Flowers public sr. sec. school</SubHeading>
          <div className="tracking-wider text-sm font-medium">Class 10th: 10CGPA</div>
          <div className = "tracking-wider text-sm font-medium">Class 12th: 88.8%</div>
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

          <div className = "tracking-wider text-sm font-medium">Expected 2023</div>
          <div className="tracking-wider text-sm font-medium">
            GPA till now: 8.57
          </div>
        </SubContent>
      </Content>
    </>
  );
};

export default App;
