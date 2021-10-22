import React from "react";
import {
  MainHeading,
  SubContent,
} from "../../components/styledComponents/index.jsx";

const App = (props) => {
  return (
    <>
      <SubContent className="lg:w-2/3">
        <MainHeading> {props.rank}
        </MainHeading>
        <div className="ml-4">
          {props.content}
          <a
            href={props.link}
            rel="noopeener noreferrer"
            target="_blank"
            className="text-customColors-dracula-pink underline w-full">
            {props.linkText}
          </a>
        </div>
      </SubContent>

    </>
  );
};

export default App;
