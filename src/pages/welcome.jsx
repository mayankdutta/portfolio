import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Content = styled.div`
  ${tw`
   h-full flex flex-col flex-grow justify-center items-center
`};
`;

const App = () => {
  return <Content>Mayank Dutta</Content>;
};

export default App;
