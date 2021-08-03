import styled from "styled-components";
import tw from "twin.macro";

export const CustomPages = styled.div`
  min-height: 80vh;
  background-color: #aaaaaa;
  ${tw`
  w-screen
  flex
  justify-center
  items-center

  px-4
  py-0
  pt-2
  my-1

  md:px-12
  md:py-2
  md:pt-6
  md:my-4

  lg:px-32
  lg:py-8
  lg:pt-20
  lg:my-8
`};
`;

export const Pages = styled.div`
  min-height: 80vh;
  background-color: #aaaaaa;
  z-index: -2;
  ${tw`
  w-screen

  px-4
  py-0
  pt-2
  my-1

  md:px-12
  md:py-2
  md:pt-6
  md:my-4

  lg:px-32
  lg:py-8
  lg:pt-20
  lg:my-8
`};
`;
export const Navbar = styled.ul`
  background-color: #8c8c8c;
  ${tw`
  my-4
  py-2
  w-screen
  flex
  sticky top-2
  bg-opacity-50
  rounded-xl
  shadow

  md:my-4
  md:py-4
  md:w-screen
  md:flex
  md:sticky top-4
  md:bg-opacity-50
  md:rounded-2xl
  md:shadow

  lg:my-4
  lg:py-4
  lg:w-screen
  lg:flex
  lg:sticky top-4
  lg:bg-opacity-50
  lg:rounded-2xl
  lg:shadow
`};
`;

export const Logo = styled.li`
  ${tw`
  w-full
  mr-2
  flex
  flex-row-reverse
  text-base
  font-medium

  md:w-full
  md:mr-4
  md:flex
  md:flex-row-reverse
  md:text-xl
  md:font-medium

  lg:w-full
  lg:mr-10
  lg:flex
  lg:flex-row-reverse
  lg:text-2xl
  lg:font-medium
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
  position: relative;
  z-index: 1;
  ${tw`
  text-3xl
  md:text-6xl
  lg:text-7xl

  font-light
`};
`;

export const SerialNo = styled.span`
  ${tw`
  text-3xl
  md:text-6xl
  lg:text-9xl
  font-extrabold
`};
`;

export const HiddenHeading = styled.div`
  position: relative;
  z-index: 0;
  color: #8c8c8c;

  ${tw`
  left-8
  bottom-4
  text-3xl
  inline-flex
  tracking-widest
  font-extrabold

  md:left-40
  md:bottom-20
  md:text-6xl
  md:inline-flex
  md:tracking-widest
  md:font-extrabold

  lg:left-40
  lg:bottom-20
  lg:text-9xl
  lg:inline-flex
  lg:tracking-widest
  lg:font-extrabold
`};
`;

export const SubHeading = styled.div`
  ${tw`
  text-base
  tracking-wide
  font-medium

  md:text-xl
  md:tracking-wide
  md:font-medium

  lg:text-4xl
  lg:tracking-wide
  lg:font-medium
`};
`;

export const SubHiddenHeading = styled.div`
  ${tw`
  text-xl
  tracking-wide
  font-light
  text-gray-500

  md:text-xl
  md:tracking-wide
  md:font-light
  md:text-gray-500

  lg:text-4xl
  lg:tracking-wide
  lg:font-light
  lg:text-gray-500

`};
`;

export const MainHeading = styled.div`
  ${tw`
  text-2xl
  tracking-wider
  font-light

  md:text-2xl
  md:tracking-wider
  md:font-light

  lg:text-4xl
  lg:tracking-wider
  lg:font-light
`};
`;

export const MinorHeading = styled.span`
  ${tw`
  text-sm
  tracking-wider
  font-bold

  md:text-base
  md:tracking-wider
  md:font-bold

  lg:text-xl
  lg:tracking-wider
  lg:font-bold
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
  grid-cols-1
  gap-x-0
  gap-y-2
  px-4
  
  md:grid-cols-2
  md:gap-x-0
  md:gap-y-2
  md:px-8
  
  lg:grid-cols-3
  lg:gap-x-0
  lg:gap-y-4
  lg:px-16
`}
`;

export const Icon = styled.li`
  ${tw`
  text-2xl
  text-gray-400
  hover:text-blue-500
  list-none

  md:text-3xl
  md:text-gray-400
  md:hover:text-blue-500
  md:list-none

  lg:text-4xl
  lg:text-gray-400
  lg:hover:text-blue-500
  lg:list-none
`}
`;
export const ButtonLarge = styled.div`
  cursor: pointer;
  ${tw`
  flex
  flex-wrap
  justify-center
  space-x-4
`};
`;
