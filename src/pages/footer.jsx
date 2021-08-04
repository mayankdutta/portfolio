import React from "react";
import {
  Footer,
  FooterIcons,
  FooterIcon,
} from "../components/styledComponents/index.jsx";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const App = () => {
  return (
    <Footer>
      <FooterIcons>
        <FooterIcon>
          <a
            href="mailto:smayankdutt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </FooterIcon>
        <FooterIcon>
          <a
            href="https://github.com/mayankdutta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </FooterIcon>
        <FooterIcon>
          <a
            href="https://www.linkedin.com/in/mayank-dutta-5a5640157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </FooterIcon>
      </FooterIcons>
      <FooterIcons>
        <div className="font-sans italic font-light my-4">
          crafted from scratch by mayank
        </div>
      </FooterIcons>
    </Footer>
  );
};

export default App;
