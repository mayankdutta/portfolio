import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div`
  ${tw`
  grid
  grid-cols-2
  mx-4
border-4
border-transparent
space-x-2
hover:shadow
hover:bg-gray-50
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
  width: 50%;
  ${tw`
  shadow
  flex
  justify-center
  items-center

`}
`;

const CardTitle = styled.div`
  ${tw`
  text-xl
  flex
justify-center
`}
`;
const CardContent = styled.span`
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
          <img src={props.link} className="flex justify-center items-center" />
        </CardImage>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default App;
