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
flex-col
space-y-16
`}
`;

export const SubContent = styled.div`
  min-width: 40vw;
  max-width: 60vw;
  ${tw`
`};
`;

export const Icons = styled.ul`
  ${tw`
grid
grid-cols-3
gap-x-0
gap-y-4
px-16
`}
`;

export const Icon = styled.li`
  ${tw`
  text-4xl
  text-gray-400
  hover:text-blue-500
  list-none
`}
`;
export const Pages = styled.div`
  border: solid 4px gold;
  min-height: 100vh;
  ${tw`
  w-screen
  px-20
  py-8
  my-8
`};
`;
export const ButtonLarge = styled.div`
  ${tw`
flex
flex-wrap
justify-center
space-x-4
`}
`;
