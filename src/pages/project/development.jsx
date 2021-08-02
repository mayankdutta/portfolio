import React from "react";
import Card from "../../components/card/index.jsx";
import {
  SubHeading,
  SubContent,
} from "../../components/styledComponents/index.jsx";

const App = () => {
  return (
    <>
      <SubContent>
        <SubHeading>Development</SubHeading>
        // TODO add about, and add few lines, and logos
        <Card
          name="Goolge keep"
          link="https://www.google.com/images/icons/product/keep-512.png"
        />
        <Card
          name="Stalker"
          link="https://static.toiimg.com/thumb/84268058.cms?width=680&height=512&imgsize=93489"
        />
        <Card
          name="RTO"
          link="https://pbs.twimg.com/profile_images/1137634760879034369/BAJJJ13E_400x400.jpg"
        />
        // TODO neovim, scripts // TODO if necessary break down these into 2
        diff pages
      </SubContent>
    </>
  );
};

export default App;
