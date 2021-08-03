import React from "react";
import Welcome from "./pages/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Tech from "./pages/tech.jsx";
import Education from "./pages/education.jsx";
import Projects from "./pages/project/index.jsx";
import Tools from "./pages/tools.jsx";
import Footer from "./pages/footer.jsx";
import { Pages } from "./components/styledComponents/index.jsx";

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
        <Footer />
      </Pages>
    </>
  );
};

export default App;
