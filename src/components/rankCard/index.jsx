import React from "react";
import {
  MainHeading,
  SubContent,
} from "../../components/styledComponents/index.jsx";

const App = ({achievement}) => {
  return (
    <>
      <SubContent className="">
        <MainHeading className="underline italic h-full ">
          {achievement.rank}
        </MainHeading>
        <span className="h-full font-sans font-medium tracking-wider">
          {achievement.content}
          <a
            href={achievement.link}
            rel="noopeener noreferrer"
            target="_blank"
            className="text-customColors-dracula-pink underline w-full"
          >
            {achievement.linkText}
          </a>
        </span>
      </SubContent>
    </>
  );
};

export default App;
