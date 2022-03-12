import React from "react";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardContent,
  CardLinks,
} from "../styledComponents/index.jsx";
import { THEME } from "../../colorscheme/index.jsx";

const cardStyle = "group hover:border-" + THEME.card.body.body;

const cardHeaderStyle =
  "bg-" +
  THEME.card.overall.border +
  " opacity-50 group-hover:opacity-100" +
  " border-b-4 md:border-r-4 lg:border-r-4 border-transparent " +
  THEME.card.head.border +
  " group-hover:text" +
  THEME.card.head.hover.color;

const cardTitleStyle = " group-hover:text-" + THEME.card.head.hover.color;
const cardAnchorStyle =
  "w-full md:w-auto md:h-full lg:w-auto lg:h-full group-hover:bg-customColors-dracula-green rounded-2xl";

const cardlink =
  "rounded-2xl flex h-auto justify-around items-center w-full flex-wrap md:w-auto md:justify-around md:items-center  md:flex-col md:space-y-2 lg:w-auto lg:justify-around lg:items-center lg:flex-col lg:space-y-2  ";

const cardContentStyle =
  "bg-" +
  THEME.card.body.background +
  " text-" +
  THEME.card.body.color +
  " rounded-2xl";

const App = (props) => {
  console.log(props);
  return (
    <Card className={cardStyle}>
      <div className={cardAnchorStyle}>
        <CardHeader className={cardHeaderStyle}>
          <CardImage>
            <img
              className="rounded-full w-full"
              style={{}}
              src={props.link}
              alt=""
            />
          </CardImage>
        </CardHeader>
      </div>
      <CardContent className={cardContentStyle}>{props.content}</CardContent>
      <div className={cardlink}>
        <a href={props.sourceLink} target="_blank" rel="noopener noreferrer">
          <CardLinks>{props.source}</CardLinks>
        </a>
        {props.sourceLink2.length > 0 ? (
          <a href={props.sourceLink2} target="_blank" rel="noopener noreferrer">
            <CardLinks>{props.source2}</CardLinks>
          </a>
        ) : null}
      </div>
    </Card>
  );
};

export default App;
