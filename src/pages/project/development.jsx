import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../../components/card/index.jsx";
import {} from "../../components/styledComponents/index.jsx";

const SubContent = styled.div`
  min-width: 40vw;
  ${tw`
  grid
  grid-cols-1
  gap-y-4
  
  md:grid
  md:grid-cols-1
  md:gap-y-6
  
  lg:grid
  lg:grid-cols-2
  lg:gap-y-8

`};
`;
const App = () => {
  return (
    <>
      <SubContent>
        <Card
          name="Google keep"
          link="https://www.google.com/images/icons/product/keep-512.png"
          content={
            <div>
              <h1>
                hello hello hello hello hello hello hello hello hello hello
                hello hello hello hello hello hello
              </h1>
              <h1>
                break hello hello hello hello hello hello hello hello hello
                hello hello hello hello hello hello
              </h1>
            </div>
          }
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
