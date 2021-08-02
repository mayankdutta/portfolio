import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Heading,
  HiddenHeading,
  SubHeading,
} from "../components/styledComponents/index.jsx";

import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Icons = styled.ul`
  ${tw`
flex
space-x-4
justify-center
`}
`;

const Icon = styled.li`
  ${tw`
  text-4xl
  text-gray-400
  hover:text-blue-500
  list-none
`}
`;

const App = () => {
  return (
    <>
      <Heading>Find something interesting? </Heading>
      <HiddenHeading> Contact </HiddenHeading>
      <SubHeading>Let's chat</SubHeading>
      <Icons>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <Icon>
          <AiFillGithub />
        </Icon>
        <Icon>
          <AiFillLinkedin />
        </Icon>
      </Icons>
    </>
  );
};

export default App;
