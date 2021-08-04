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
  text-gray-900
  hover:text-blue-700
  list-none
`}
`;
const App = () => {
  return (
    <Footer>
      <Icons>
        <Icon>
          <a
            href="mailto:smayankdutt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://github.com/mayankdutta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://www.linkedin.com/in/mayank-dutta-5a5640157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
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
