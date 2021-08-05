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
import { THEME } from "./colorscheme/index.jsx";

const App = () => {
  return (
    <div
      style={{ backgroundColor: THEME.mainBackgroundColor }}
      className="px-8 h-full"
    >
      <Navbar />
      <Pages className="flex justify-center items-center">
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
        <Contact />
      </Pages>
      <Footer />
    </div>
  );
};

export default App;
