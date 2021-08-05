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
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <CardHeader
          className={"group-hover:bg-" + THEME.card.head.hover.background}
        >
          <CardImage>
            <img src={props.link} alt="image" />
          </CardImage>
          <CardTitle>{props.name}</CardTitle>
        </CardHeader>
      </a>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default App;
