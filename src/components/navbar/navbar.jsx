import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Navbar = styled.ul`
  ${tw`
  my-4
  py-4
  w-screen
  flex
  sticky top-3
  bg-gray-100
  bg-opacity-50
  shadow
`};
`;

const Logo = styled.li`
  ${tw`
  w-full
  mr-10
  flex
  flex-row-reverse
  text-2xl
  font-medium
`};
`;

const NavComponents = styled.li`
  ${tw`
  w-full
  justify-self-end
  flex
  justify-end
  space-x-4
`};
`;

const App = () => {
  return (
    <Navbar>
      <Logo>Resume</Logo>
      {/*
      <NavComponents>

        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
      </NavComponents>
      */}
    </Navbar>
  );
};

export default App;
