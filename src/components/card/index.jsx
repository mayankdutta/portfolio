import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div`
  border: 2px solid #8c8c8c;
  ${tw`
  flex
  flex-nowrap
  mx-4
  space-x-2
  hover:shadow-2xl
  rounded-2xl
`}
`;

const CardHeader = styled.div`
  border-right: 2px solid #8c8c8c;
  ${tw`
  flex
  flex-col
  p-2
  h-full
`}
`;

const CardImage = styled.div`
  ${tw`
  h-24
  w-24
  rounded-full
`}
`;

const CardTitle = styled.div`
  ${tw`
  text-sm
  flex
  items-center
  justify-center

  md:text-base
  md:flex
  md:items-center
  md:justify-center

  lg:text-xl
  lg:flex
  lg:items-center
  lg:justify-center
`}
`;
const CardContent = styled.span`
  ${tw`
  text-sm
  flex
  flex-wrap
  flex-shrink
  flex-grow
  items-center
  justify-center

  md:text-base
  md:flex
  md:flex-wrap
  md:flex-shrink
  md:flex-grow
  md:items-center
  md:justify-center

  lg:text-base
  lg:flex
  lg:flex-wrap
  lg:flex-shrink
  lg:flex-grow
  lg:items-center
  lg:justify-center
`}
`;

const App = (props) => {
  return (
    <Card>
      <CardHeader>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <CardImage>
            <img src={props.link} />
          </CardImage>
        </a>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default App;
