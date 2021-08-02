import styled from "styled-components";
import tw from "twin.macro";

export const Heading = styled.div`
  ${tw`
  text-7xl
  font-light
`};
`;

export const SerialNo = styled.span`
  ${tw`
  text-9xl
  font-extrabold
`};
`;

export const HiddenHeading = styled.div`
  position: relative;
  z-index: -1;
  color: #ebebeb;
  ${tw`
  left-40
  bottom-20
  text-9xl
  inline-flex
  tracking-widest
  font-extrabold
`};
`;

export const SubHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wide
  font-medium
`};
`;

export const Content = styled.div`
  ${tw`
flex 
flex-wrap
space-x-4
`}
`;

export const SubContent = styled.div`
  min-width: 40vw;
  max-width: 40vw;
  ${tw`
`};
`;
