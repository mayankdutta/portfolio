import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../../components/card/index.jsx";
import {
  SubHeading,
  SubContent,
} from "../../components/styledComponents/index.jsx";

const CardPlace = styled.div`
  ${tw`

`}
`;

const App = () => {
  return (
    <>
      <SubContent>
        <Card
          name="Google keep"
          link="https://www.google.com/images/icons/product/keep-512.png"
          content="make this as a project while learning the very basics of the react"
        />
        <Card
          name="Stalker"
          link="https://static.toiimg.com/thumb/84268058.cms?width=680&height=512&imgsize=93489"
        />
        <Card
          name="RTO"
          link="https://pbs.twimg.com/profile_images/1137634760879034369/BAJJJ13E_400x400.jpg"
        />
      </SubContent>
    </>
  );
};

export default App;
