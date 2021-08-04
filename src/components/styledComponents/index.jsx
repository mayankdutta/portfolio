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
export const CustomContent = styled.div`
  ${tw`
    w-full 

    flex 
    flex-col 

    justify-center
    items-center

`};
`;

export const CustomHeading = styled.div`
  ${tw`
  text-xl
  font-light
  flex   
  justify-center 
  items-center

  md:text-2xl
  md:font-light
  md:flex   
  md:justify-center 
  md:items-center

  lg:text-7xl
  lg:font-light
  lg:flex   
  lg:justify-center 
  lg:items-center
`};
`;

export const CustomSubHeading = styled.div`
  ${tw`
  text-xs
  font-extralight

  md:text-base
  md:font-extralight
  md:w-96

  lg:text-xl
  lg:font-extralight
  lg:w-96
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
  bg-opacity-10
  rounded-xl
  shadow

  md:my-4
  md:py-4
  md:w-screen
  md:flex
  md:sticky top-4
  md:bg-opacity-10
  md:rounded-2xl
  md:shadow

  lg:my-4
  lg:py-4
  lg:w-screen
  lg:flex
  lg:sticky top-4
  lg:bg-opacity-10
  lg:rounded-2xl
  lg:shadow
`};
`;

export const NavbarLogo = styled.li`
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
  /* max-width: 60vw; */
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
export const Footer = styled.div`
  ${tw`
  py-4
  mb-4

  md:py-4
  md:mb-4

  lg:py-4
  lg:mb-4

`}
`;
export const FooterIcons = styled.ul`
  ${tw`
flex
space-x-4
justify-center
items-end
`}
`;

export const FooterIcon = styled.li`
  ${tw`
  text-4xl
  text-gray-900
  hover:text-blue-700
  list-none
`}
`;
export const Card = styled.div`
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

export const CardHeader = styled.div`
  border-right: 2px solid #8c8c8c;
  ${tw`
  flex
  flex-col
  p-2
  h-full
  hover:bg-indigo-900
  hover:rounded-2xl
  hover:text-white
`}
`;

export const CardImage = styled.div`
  ${tw`
  h-24
  w-24
  rounded-full
`}
`;

export const CardTitle = styled.div`
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
export const CardContent = styled.span`
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
export const Logo = styled.div`
  ${tw`
flex
flex-wrap

justify-center
items-center

space-x-4
space-y-4

p-4
border-2
border-transparent

font-sans
font-medium

text-black

hover:shadow-xl
hover:text-black
hover:font-bold
hover:shadow
`};
`;
