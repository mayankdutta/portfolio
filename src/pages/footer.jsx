import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const Footer = styled.div`
  ${tw`
  py-4
  mb-4

  md:py-4
  md:mb-4

  lg:py-4
  lg:mb-4

`}
`;
const Icons = styled.ul`
  ${tw`
flex
space-x-4
justify-center
items-end
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
    <Footer>
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
      <Icons>
        <div className="font-sans italic font-light my-4">
          crafted from sratch by mayank
        </div>
      </Icons>
    </Footer>
  );
};

export default App;
