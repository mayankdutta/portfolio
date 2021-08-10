import React from "react";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardContent,
} from "../styledComponents/index.jsx";
import { THEME } from "../../colorscheme/index.jsx";

const App = (props) => {
  return (
    <Card className={"group hover:border-" + THEME.card.body.body}>
      <a
        href={props.href}
        target="_blank"
        className="w-full md:w-auto md:h-full lg:w-auto lg:h-full"
        rel="noopener noreferrer"
      >
        <CardHeader
          className={
            "group-hover:bg-" +
            THEME.card.head.hover.background +
            " border-b-4 md:border-r-4 lg:border-r-4 border-transparent group-hover:border-" +
            THEME.card.head.border +
            " group-hover:text" +
            THEME.card.head.hover.color
          }
        >
          <CardImage>
            <img src={props.link} alt="" />
          </CardImage>
          <CardTitle
            className={" group-hover:text-" + THEME.card.head.hover.color}
          >
            {props.name}
          </CardTitle>
        </CardHeader>
      </a>
      <CardContent
        className={
          "bg-" +
          THEME.card.body.background +
          " text-" +
          THEME.card.body.color +
          " rounded-2xl"
        }
      >
        {props.content}
      </CardContent>
    </Card>
  );
};

export default App;
