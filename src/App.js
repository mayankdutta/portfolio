import React from "react";
import Welcome from "./pages/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Tech from "./pages/tech.jsx";
import Education from "./pages/education.jsx";
import Projects from "./pages/project/index.jsx";
import Tools from "./pages/tools.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./pages/footer.jsx";
import { Pages } from "./components/styledComponents/index.jsx";
import styled from "styled-components";
import tw from "twin.macro";

const CustomPages = styled.div`
  min-height: 80vh;
  ${tw`
  w-screen
  flex
  justify-center
  items-center

  px-4
  py-0
  pt-2
  my-1

  md:px-12
  md:py-2
  md:pt-6
  md:my-4

  lg:px-32
  lg:py-8
  lg:pt-20
  lg:my-8
`};
`;

const App = () => {
  return (
    <>
      <Navbar />
      <CustomPages>
        <Welcome />
      </CustomPages>
      <Pages>
        <AboutMe />
      </Pages>
      <Pages>
        <Tech />
      </Pages>
      <Pages>
        <Education />
      </Pages>
      <Pages>
        <Projects />
      </Pages>
      <Pages>
        <Tools />
      </Pages>
      <Pages>
        <Contact />
      </Pages>
      <Footer />
    </>
  );
};

export default App;
