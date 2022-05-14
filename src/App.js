import React, { useState } from "react";
import Welcome from "./pages/welcome.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Tech from "./pages/tech.jsx";
import Education from "./pages/education.jsx";
import Projects from "./pages/project/index.jsx";
import Tools from "./pages/tools.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./pages/footer.jsx";
import Achievements from "./pages/achievements.jsx";
import Open from "./pages/opensource.jsx";
import Hook from "./hooks/Sheet";

import { Pages } from "./components/styledComponents/index.jsx";
import { THEME } from "./colorscheme/index.jsx";
// import "./App.scss";

const App = () => {
  const [userDetails, setUserDetails] = useState([
    {
      title: "cv",
      data: "",
    },
  ]);
  return (
    <div
      style={{ backgroundColor: THEME.body.background }}
      className="px-4 h-full py-2"
    >
      <Hook userDetails={userDetails} setUserDetails={setUserDetails} />
      <Navbar cv={userDetails[0].data}  />
      <Pages className="flex justify-center items-center">
        <Welcome />
      </Pages>
      <Pages>
        <AboutMe />
      </Pages>
      <Pages>
        <Education />
      </Pages>
      <Pages>
        <Projects />
      </Pages>
      <Pages>
        <Achievements />
      </Pages>
      <Pages>
        <Open />
      </Pages>
      <Pages>
        <Tech />
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
