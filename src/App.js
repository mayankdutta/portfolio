import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Welcome from "./pages/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Tech from "./pages/tech.jsx";

const Pages = styled.div`
  height: 90vh;
  ${tw`
  w-screen
  px-20
  py-8
`};
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Pages>
        <Welcome />
      </Pages>
      <Pages>
        <AboutMe />
      </Pages>
      <Pages> <Tech /></Pages>
    </>
  );
};

export default App;
