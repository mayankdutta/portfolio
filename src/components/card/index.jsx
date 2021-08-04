import React from "react";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardContent,
} from "../styledComponents/index.jsx";

const App = (props) => {
  return (
    <Card className = "group">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <CardHeader>
          <CardImage>
            <img src={props.link} />
          </CardImage>
          <CardTitle>{props.name}</CardTitle>
        </CardHeader>
      </a>
      <CardContent>{props.content}</CardContent>
    </Card>
  );
};

export default App;
