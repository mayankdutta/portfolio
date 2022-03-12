import React from "react";
import {
  Footer,
  FooterIcons,
  FooterIcon,
} from "../components/styledComponents/index.jsx";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { THEME } from "../colorscheme/index.jsx";

const App = () => {
  return (
    <Footer>
      <FooterIcons>
        <FooterIcon
          className={
            "text-" +
            THEME.footer.icon.color +
            " hover:text-" +
            THEME.footer.icon.hover.color
          }
        >
          <a
            href="mailto:smayankdutt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail />
          </a>
        </FooterIcon>
        <FooterIcon
          className={
            "text-" +
            THEME.footer.icon.color +
            " hover:text-" +
            THEME.footer.icon.hover.color
          }
        >
          <a
            href="https://github.com/mayankdutta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </FooterIcon>
        <FooterIcon
          className={
            "text-" +
            THEME.footer.icon.color +
            " hover:text-" +
            THEME.footer.icon.hover.color
          }
        >
          <a
            href="https://linkedin.com/in/mayankdutta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </FooterIcon>
      </FooterIcons>
      <FooterIcons>
        <div
          className={
            "font-sans italic font-light my-4 text-" + THEME.footer.color
          }
        >
          crafted from scratch by mayank
        </div>
      </FooterIcons>
    </Footer>
  );
};

export default App;
