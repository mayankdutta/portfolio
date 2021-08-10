import React from "react";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardContent,
} from "../styledComponents/index.jsx";
import { THEME } from "../../colorscheme/index.jsx";

const cardStyle =
  "group hover:border-" +
  THEME.card.body.body +
  " bg-" +
  THEME.card.body.background;

const cardHeaderStyle =
  "group-hover:bg-" +
  THEME.card.head.hover.background +
  " border-b-4 md:border-r-4 lg:border-r-4 border-transparent group-hover:border-" +
  THEME.card.head.border +
  " group-hover:text" +
  THEME.card.head.hover.color;

const cardTitleStyle = " group-hover:text-" + THEME.card.head.hover.color;
const cardAnchorStyle = "w-full md:w-auto md:h-full lg:w-auto lg:h-full";

const cardContentStyle =
  "bg-" +
  THEME.card.body.background +
  " text-" +
  THEME.card.body.color +
  " rounded-2xl";

const App = (props) => {
  return (
    <Card className={cardStyle}>
      <a
        href={props.href}
        target="_blank"
        className={cardAnchorStyle}
        rel="noopener noreferrer"
      >
        <CardHeader className={cardHeaderStyle}>
          <CardImage>
            <img src={props.link} alt="" />
          </CardImage>
          <CardTitle className={cardTitleStyle}>{props.name}</CardTitle>
        </CardHeader>
      </a>
      <CardContent className={cardContentStyle}>{props.content}</CardContent>
    </Card>
  );
};

export default App;
