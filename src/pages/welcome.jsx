import React from "react";
import {
  CustomContent,
  CustomHeading,
  CustomSubHeading,
} from "../components/styledComponents/index.jsx";

const App = () => {
  return (
    <CustomContent>
      <CustomSubHeading>Hii, I am</CustomSubHeading>
      <CustomHeading className="my-2">Mayank </CustomHeading>
    </CustomContent>
  );
};

export default App;
