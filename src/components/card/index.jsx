import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div`
  ${tw`
  flex
font-sans
text-2xl
border-4
border-transparent
hover:border-gray-800
p-4
items-center
justify-around
`}
`;

const CardImage = styled.div`
  ${tw`
  h-24
  w-24
  rounded-full
  shadow
`}
`;

const App = (props) => {
  return (
    <Card>
      <CardImage>
        <img src={props.link} />
      </CardImage>
      {props.name}
    </Card>
  );
};

export default App;
