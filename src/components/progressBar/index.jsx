import React from "react";
const App = (props) => {
  return (
    <>
      <div className="relative pt-1">
        {props.language}
        <div className="overflow-hidden h-4 mb-4 text-xs flex border-4 border-gray-400 rounded bg-gray-400">
          <div
            style={{ width: props.width }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
