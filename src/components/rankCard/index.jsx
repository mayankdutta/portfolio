import React from "react";
import {
  MainHeading,
  SubContent,
} from "../../components/styledComponents/index.jsx";

const App = (props) => {
  return (
    <>
      <SubContent className="">
        <MainHeading className="underline italic h-full ">
          {props.rank}
        </MainHeading>

        <span className="h-full font-sans font-medium tracking-wider">
          {props.content}
          <a
            href={props.link}
            rel="noopeener noreferrer"
            target="_blank"
            className="text-customColors-dracula-pink underline w-full"
          >
            {props.linkText}
          </a>
        </span>
      </SubContent>
    </>
  );
};

export default App;
