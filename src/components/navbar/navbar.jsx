import { React, useState, useEffect } from "react";
import Theme from "../../colorscheme/index.jsx";

import {
  Navbar,
  NavbarLogo,
} from "../../components/styledComponents/index.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    console.log("Calling start");
    <Theme value={darkMode} />;
    console.log("Calling end");
  }, [darkMode]);

  return (
    <Navbar>
      <NavbarLogo
        className={"justify-start w-full"}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? <span> </span> : <span></span>}
      </NavbarLogo>
      <NavbarLogo className="flex-row-reverse">
        <a
          href="https://drive.google.com/file/d/17qQGFM0vkdLnbHticePQDevwCGNAOtVj/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavbarLogo>
      {/*
      <NavComponents>

        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
      </NavComponents>
      */}
    </Navbar>
  );
};

export default App;
