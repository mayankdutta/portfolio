import styled from "styled-components";
import tw from "twin.macro";

export const Navbar = styled.ul`
  ${tw`
  my-4
  py-4
  w-screen
  flex
  sticky top-4
  bg-gray-100
  bg-opacity-50
  rounded-2xl
  shadow
`};
`;

export const Logo = styled.li`
  ${tw`
  w-full
  mr-10
  flex
  flex-row-reverse
  text-2xl
  font-medium
`};
`;

export const NavComponents = styled.li`
  ${tw`
  w-full
  justify-self-end
  flex
  justify-end
  space-x-4
`};
`;

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

export const SubHiddenHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wide
  font-light
  text-gray-500
`};
`;

export const MainHeading = styled.div`
  ${tw`
  text-4xl
  tracking-wider
  font-light
`};
`;

export const MinorHeading = styled.span`
  ${tw`
  text-xl
  tracking-wider
  font-bold
`};
`;

export const Content = styled.div`
  ${tw`
flex 
flex-col
space-y-16
my-8
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
  min-height: 80vh;
  ${tw`
  w-screen
  px-32
  py-8
  pt-20
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
