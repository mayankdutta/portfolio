import React from "react";
import {
  Navbar,
  NavbarLogo,
} from "../../components/styledComponents/index.jsx";

const App = () => {
  return (
    <Navbar>
      <NavbarLogo>
        <a
          href="https://drive.google.com/file/d/1_b35Ua341UJNENOmgVIpJ7zL-Qb5EAst/view?usp=sharing"
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
