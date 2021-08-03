import styled from "styled-components";
import tw from "twin.macro";

export const Navbar = styled.ul`
  ${tw`
  my-4
  py-2
  w-screen
  flex
  sticky top-2
  bg-gray-100
  bg-opacity-50
  rounded-xl
  shadow

  md:my-4
  md:py-4
  md:w-screen
  md:flex
  md:sticky top-4
  md:bg-gray-100
  md:bg-opacity-50
  md:rounded-2xl
  md:shadow

  lg:my-4
  lg:py-4
  lg:w-screen
  lg:flex
  lg:sticky top-4
  lg:bg-gray-100
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
  ${tw`
  text-xl
  md:text-2xl
  lg:text-7xl

  font-light
`};
`;

export const SerialNo = styled.span`
  ${tw`
  text-xl
  md:text-3xl
  lg:text-9xl
  font-extrabold
`};
`;

export const HiddenHeading = styled.div`
  position: relative;
  z-index: -1;
  color: #ebebeb;
  ${tw`
  left-20
  bottom-4

  md:left-40
  md:bottom-20

  lg:left-40
  lg:bottom-20

  text-xl
  md:text-3xl
  lg:text-9xl

  inline-flex
  tracking-widest
  font-extrabold
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
  text-base
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
  text-base
  tracking-wider
  font-light

  md:text-xl
  md:tracking-wider
  md:font-light

  lg:text-4xl
  lg:tracking-wider
  lg:font-light
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
export const ButtonLarge = styled.div`
  ${tw`
  flex
  flex-wrap
  justify-center
  space-x-4
`}
`;
