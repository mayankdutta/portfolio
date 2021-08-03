import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div`
  ${tw`
  flex
  flex-wrap
border-4
border-transparent
hover:border-gray-800
space-x-2
`}
`;

const CardHeader = styled.div`
  ${tw`
flex
flex-col
p-2
border-2
border-gray-400
h-full
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

const CardTitle = styled.div`
  ${tw`
  text-xl
  flex
items-center
justify-center
`}
`;
const CardContent = styled.div`
  ${tw`
  text-base
  flex
  flex-wrap
  items-center
  justify-center
`}
`;

const App = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardImage>
          <img src={props.link} />
        </CardImage>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default App;
