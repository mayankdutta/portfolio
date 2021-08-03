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
  font-medium
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
          <div>Class 10th: 10CGPA</div>
          <div>Class 12th: 88.8%</div>
        </SubContent>
      </Content>
      <Content>
        <SubContent>
          <SubHeading> Faculty of Engineering Jamia Millia Islamia </SubHeading>
          <div>
            B.tech in Electrical Engineering(major) and computer science(minor)
          </div>
          <div>GPA till now: 8.57</div>
          <div>Expected 2023</div>
        </SubContent>
      </Content>
    </>
  );
};

export default App;
