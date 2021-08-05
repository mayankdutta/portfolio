import React from "react";
import { THEME } from "../../colorscheme/index.jsx";
const App = (props) => {
  return (
    <>
      <div className="relative pt-1">
        {props.language}
        <div
          style={{}}
          className="overflow-hidden h-4 mb-4 text-xs flex border-4 border-black rounded "
        >
          <div
            style={{
              width: props.width,
            }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-customColors-one-300"
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
