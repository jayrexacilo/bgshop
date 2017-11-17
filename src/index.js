import React from "react";
import { render } from "react-dom";
import GameCard from "./components/GameCard";

import "semantic-ui-css/semantic.min.css";

const games = [
  {
    name: "Quadropolis",
    thumbnail: "https://cf.geekdo-images.com/images/pic2840020_md.jpg",
    price: "32.99",
    players: "2-4",
    duration: "60"
  },
  {
    name: "Five Tribes",
    thumbnail: "https://cf.geekdo-images.com/images/pic2055255_md.jpg",
    price: "51.00",
    players: "2-4",
    duration: "80"
  },
  {
    name: "Roll for the Galaxy",
    thumbnail: "https://cf.geekdo-images.com/images/pic1473629_md.jpg",
    price: "22.99",
    players: "2-5",
    duration: "45"
  }
];

render(<GameCard game={games[1]} />, document.getElementById("root"));
