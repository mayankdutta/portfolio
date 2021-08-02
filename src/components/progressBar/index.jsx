import React from "react";
const App = (props) => {
  return (
    <>
      <div className="relative pt-1">
        {props.language}
        <div className="overflow-hidden h-4 mb-4 text-xs flex border-4 border-blue-500 rounded bg-blue-200">
          <div
            style={{ width: props.width }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
