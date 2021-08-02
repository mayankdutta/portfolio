import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Welcome from "./pages/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";

const Pages = styled.div`
  height: 90vh;
  ${tw`
  w-screen
  px-16
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
      <Pages>hello</Pages>
    </>
  );
};

export default App;
