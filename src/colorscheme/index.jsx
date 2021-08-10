// import { Dark } from "./dracula.jsx";
import { Dark } from "./dracula.jsx";
import { Light } from "./light.jsx";

// import { THEME } from "./light.jsx";

let value = true;
console.log(value);
let THEME = Dark;

const App = (props) => {
  value = props.value;
};

THEME = value === true ? Dark : Light;
console.log(value);

// const THEME = Dark;
export default App;
export { THEME };
