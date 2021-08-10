import React from "react";
import { THEME } from "../../colorscheme/index.jsx";
const App = (props) => {
  return (
    <>
      <div className="relative pt-1">
        {props.language}
        <div
          style={{}}
          className={
            "overflow-hidden h-2 md:h-2 lg:h-4 mb-4 text-xs flex bordr-0 md:border-4 lg:border-4 border-transparent md:border-black lg:border-black rounded bg-" +
            THEME.progressBar.background
          }
        >
          <div
            style={{
              width: props.width,
            }}
            className={
              "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-" +
              THEME.progressBar.bar.background
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
