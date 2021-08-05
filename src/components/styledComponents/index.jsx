import styled from "styled-components";
import tw from "twin.macro";
import { THEME } from "../../colorscheme/index.jsx";

console.log(THEME.footerIconColor);
console.log("over");

// const backgroundColor = "#aaaaaa";
const backgroundColor = THEME.backgroundColor;
const navbarBackgroundColor = THEME.navbarBackgroundColor;
const navbarLogoColor = THEME.navbarLogoColor;

const hiddenTextColor = THEME.hiddenTextColor;
const headingColor = THEME.headingColor;
const serialColor = THEME.serialColor;

const buttonColor = THEME.buttonColor;
const buttonHoverColor = THEME.buttonHoverColor;
const buttonBorder = THEME.buttonBorder;

// const cardHeaderHoverColor = "gray-900"; /* Tailwind */
const cardHeaderHoverColor = "customColors-one-300"; /* Tailwind */
const cardBorder = THEME.cardBorder;
const cardHoverBodyBorder = "customColors-one-300";

const footerIconColor = "customColors-one-400"; /* Tailwind */
const footerIconHoverColor = "customColors-one-300"; /* Tailwind */

const logoHover = "customColors-one-400";
const logoTextOnHover = "customColors-one-100";

const buttonStyle =
  " text-base md:text-xl lg:text-2xl  font-medium tracking-wide rounded-2xl p-4 border-4 border-" +
  buttonBorder +
  " ";

export const buttonHoverStyle =
  buttonStyle + " hover:bg-" + buttonHoverColor + " hover:text";

export const buttonChoosenStyle =
  buttonStyle + " bg-" + buttonColor + " text-white";

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
    text-center
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
  min-width: 80vw;
  background-color: ${backgroundColor};
  ${tw`
    rounded-2xl
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
  background-color: ${navbarBackgroundColor};
  max-width: 100vw;
  position: sticky;
  z-index: 1;
  ${tw`
    py-2
    px-2
    flex
    top-2
    bg-opacity-10
    rounded-xl
    shadow

    md:py-4
    md:px-4
    md:flex
    md:top-4
    md:bg-opacity-10
    md:rounded-2xl
    md:shadow

    lg:py-4
    lg:px-8
    lg:flex
    lg:top-4
    lg:bg-opacity-10
    lg:rounded-2xl
    lg:shadow
`};
`;

export const NavbarLogo = styled.li`
  color: ${navbarLogoColor};
  ${tw`
    w-full
    h-full

    flex
    flex-row-reverse
    text-base
    font-medium

    md:w-full
    md:flex
    md:flex-row-reverse
    md:text-xl
    md:font-medium

    lg:w-full
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

export const SerialNo = styled.span`
  color: ${serialColor};
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
  color: ${hiddenTextColor};

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

export const Heading = styled.div`
  position: relative;
  z-index: 2;
  color: ${headingColor};
  ${tw`
    text-3xl
    md:text-6xl
    lg:text-7xl

    font-light
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
    
    md:grid-cols-2
    md:gap-x-0
    md:gap-y-2
    
    lg:grid-cols-3
    lg:gap-x-0
    lg:gap-y-4
`}
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
    text-${footerIconColor}
    hover:text-${footerIconHoverColor}
    list-none
`}
`;
export const Card = styled.div`
  border: 2px solid ${cardBorder};
  ${tw`
    flex
    flex-nowrap
    mx-4
    space-x-2
    hover:shadow-2xl
    hover:border-${cardHoverBodyBorder}
    rounded-2xl
`}
`;

export const CardHeader = styled.div`
  border-right: 2px solid ${cardBorder};
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    p-2
    h-full
    group-hover:bg-${cardHeaderHoverColor}
    group-hover:rounded-2xl
    group-hover:text-white
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
  border: 2px solid ${cardBorder};
  ${tw`
    flex
    flex-wrap
    
    justify-center
    items-center
    
    space-x-2
    space-y-2
    
    p-2
    mx-4

    rounded-2xl
    
    font-sans
    font-medium
    
    text-black
    
    hover:shadow-xl
    hover:text-${logoTextOnHover}
    hover:bg-${logoHover}
    hover:shadow
    hover:border-transparent
`};
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
