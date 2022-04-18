import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {
  darkMode: false,
};

const reducer = (state, action) => {
  if (action === "toggle") {
    return { darkMode: state.initialState.darkMode };
  } else {
    return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
