import styled from "styled-components";
import tw from "twin.macro";
import { THEME } from "../../colorscheme/index.jsx";

export const styleProjectMiniIcons =
  "flex flex-wrap gap-y-2 gap-x-2 mt-2 items-center justify-center";

export const styleSmallTwoButton =
  "flex justify-center items-center flew-wrap w-full md:w-auto lg:w-auto ";

const buttonStyle =
  " text-base md:text-xl lg:text-2xl font-medium tracking-wide rounded-2xl p-4 border-4 border-" +
  THEME.button.border +
  " text-" +
  THEME.button.text;

export const buttonHoverStyle =
  buttonStyle +
  " hover:bg-" +
  THEME.button.hover.background +
  "  text-" +
  THEME.button.color;

export const buttonChoosenStyle =
  buttonStyle + " bg-" + THEME.button.background + " text-white";

export const CustomContent = styled.div`
  ${tw`
    flex 
    flex-col 
    w-full 
    justify-center
    items-center
`};
`;

export const CustomHeading = styled.div`
  color: ${THEME.text.heading.color};
  ${tw`
    text-xl
    font-light
    flex   
    justify-center 
    items-center

    md:text-4xl
    md:font-light

    lg:text-8xl
    lg:font-extralight
`};
`;

export const CustomSubHeading = styled.div`
  color: ${THEME.text.subHeading};
  ${tw`
    text-center
    text-xs
    font-medium
    tracking-wide

    md:text-base
    md:font-medium
    md:w-96

    lg:text-xl
    lg:font-bold
    lg:w-96
`};
`;

export const Pages = styled.div`
  min-height: 80vh;
  background-color: ${THEME.page.background};
  ${tw`
    rounded-2xl
    px-4
    py-4
    pt-2
    my-4
    mx-8

    md:px-12
    md:pt-6
    md:my-4
    md:mx-16

    lg:px-32
    lg:py-8
    lg:pt-20
    lg:my-8
    lg:mx-32
`};
`;
export const Navbar = styled.ul`
  background-color: ${THEME.navbar.background};
  max-width: 100vw;
  // position: sticky;
  border: 2px solid ${THEME.navbar.border || "transparent"};
  z-index: 1;
  ${tw`
    p-2
    flex
    top-2
    bg-opacity-10
    rounded-xl
    shadow

    md:p-4
    md:top-4
    md:rounded-2xl

    lg:py-4
    lg:px-8
    lg:top-4
    lg:rounded-2xl
`};
`;

export const NavbarLogo = styled.li`
  color: ${THEME.navbar.logo.color};
  ${tw`
    w-full
    h-full

    flex
    text-xl
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

export const SerialNo = styled.span`
  position: relative;
  z-index: 0;
  color: ${THEME.text.serial};
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
  color: ${THEME.text.hidden.color};

  ${tw`
    left-8
    bottom-6
    text-3xl
    inline-flex
    tracking-wide
    font-black

    md:left-40
    md:bottom-20
    md:text-6xl
    md:inline-flex

    lg:left-40
    lg:bottom-20
    lg:text-9xl
    lg:inline-flex
`};
`;

export const SubHiddenHeading = styled.div`
  color: ${THEME.text.subHidden.color};
  ${tw`
    text-xl
    tracking-wide
    font-medium

    md:text-xl
    lg:text-4xl
`};
`;

export const Heading = styled.div`
  position: relative;
  z-index: 2;
  color: ${THEME.text.heading.color};
  ${tw`
    text-3xl
    md:text-6xl
    lg:text-8xl

    font-extralight
`};
`;

export const SubHeading = styled.div`
  color: ${THEME.text.subHeading};
  ${tw`
    text-base
    tracking-wide
    font-medium
    font-sans
    text-lg

    md:text-xl

    lg:text-5xl
`};
`;

export const MainHeading = styled.div`
  color: ${THEME.text.subHeading};
  ${tw`
    text-2xl
    tracking-wider
    font-medium

    md:text-2xl

    lg:text-4xl
`};
`;

export const MinorHeading = styled.span`
  color: ${THEME.text.subHeading};
  ${tw`
    text-sm
    tracking-wider
    font-bold

    md:text-base
    lg:text-xl
`};
`;

export const Content = styled.div`
  color: ${THEME.text.normal};
  ${tw`
    flex 
    flex-col
    space-y-16
    my-8
`};
`;

export const SubContent = styled.div`
  color: ${THEME.text.normal};
  min-width: 40vw;
  /* max-width: 60vw; */
  ${tw`

text-xs
  md:text-lg
  lg:text-xl
`};
`;

export const Icons = styled.ul`
  ${tw`
    grid
    grid-cols-1
    gap-x-0
    gap-y-2
    
    md:grid-cols-2
    
    lg:grid-cols-3
    lg:gap-y-4
`}
`;

export const Footer = styled.div`
  ${tw`
    py-4
    mb-4
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
    list-none
`}
`;
export const Card = styled.div`
  position: relative;
  ${tw`
    flex
    flex-wrap

flex-grow
flex-shrink

    border-4 border-gray-800

    rounded-2xl

    md:flex-nowrap
    md:mx-4
    md:space-x-2
    md:hover:shadow-2xl

    lg:flex-nowrap
    lg:mx-4
    lg:space-x-2
    lg:hover:shadow-2xl
`}
`;

export const CardHeader = styled.div`
  z-index: -1;
  ${tw`
    flex
    flex-col

    flex-shrink
    flex-grow-0

    items-center
    justify-center

    p-2

    h-full
    w-full

    group-hover:rounded-2xl
    group-hover:text-white
  `}
`;

export const CardImage = styled.div`
  z-index: 1;
  ${tw`
  lg:w-44
  md:w-32
  w-20
    rounded-full
  `}
`;

export const CardTitle = styled.div`
  ${tw`
    text-sm

    md:text-base
    lg:text-xl
`}
`;
export const CardContent = styled.span`
  z-index: 1;
  ${tw`
    p-2
    px-8

    text-xs
    flex
    flex-wrap
    flex-shrink
    items-center
    justify-center

    group-hover:rounded-2xl

    md:text-base
    md:flex-grow
    md:w-full
    md:h-full


    lg:text-lg
    lg:flex-grow
    lg:w-full
    lg:h-full
`}
`;

export const CardLinks = styled.div`
${tw`
`}
`;

export const Logo = styled.div`
  border: 2px solid ${THEME.card.overall.border};
  ${tw`
    flex
    flex-wrap
    
    justify-center
    items-center
    
    rounded-2xl

    text-black
    
    hover:shadow-xl
    hover:shadow
    hover:border-transparent

    space-x-2
    space-y-2
    p-2
    mx-4
    text-xs

`};
`;

export const ButtonLarge = styled.div`
  cursor: pointer;
  ${tw`
    flex
    flex-wrap
    justify-center
    items-center

    space-y-2

    md:space-x-4
    md:space-y-0

    lg:space-x-4
    lg:space-y-0
`};
`;
