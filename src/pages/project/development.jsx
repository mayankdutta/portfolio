import React from "react";
import Card from "../../components/card/index.jsx";
import { SubContent } from "../../components/styledComponents/index.jsx";

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
        <Card
          name="LunarVim"
          link="https://repository-images.githubusercontent.com/145050544/3387d880-dc4f-11eb-8ecf-609ba3ec8a40"
        />
      </SubContent>
    </>
  );
};

export default App;
