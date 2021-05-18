import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import ListView from "../components/ListView";

const LandingStyle = css({
  padding: "1em",
  fontWeight: 500,
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  h1: {
    fontSize: "3rem",
  },
});
const data: {
  show_id: string;
  type: "Movie" | "TV Show";
  title: string;
  director: string;
  cast: string[];
  country: string;
  date_added: string;
  release_year: number;
  rating: string;
  duration: string;
  listed_in: string[];
  description: string;
}[] = [
  {
    show_id: "0",
    type: "Movie",
    title: "The Last Jedi",
    director: "Rian Johnson",
    cast: ["Mark Hamill"],
    country: "USA",
    date_added: "2018",
    release_year: 2017,
    rating: "5 stars",
    duration: "2 hours",
    listed_in: ["best movies"],
    description: "The second best fucking star wars movie",
  },
  {
    show_id: "1",
    type: "TV Show",
    title: "B99",
    director: "Someone",
    cast: [
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
    ],
    country: "USA",
    date_added: "2016",
    release_year: 2011,
    rating: "5 stars",
    duration: "6 seasons",
    listed_in: [
      "best comedies",
      "best comedies",
      "best comedies",
      "best comedies",
      "best comedies",
      "best comedies",
      "best comedies",
      "best comedies",
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    show_id: "2",
    type: "TV Show",
    title: "B99",
    director: "Someone",
    cast: [
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
      "Melissa Fumero",
    ],
    country: "USA",
    date_added: "2016",
    release_year: 2011,
    rating: "5 stars",
    duration: "6 seasons",
    listed_in: ["best comedies"],
    description: "Fucking hilarious",
  },
  {
    show_id: "3",
    type: "TV Show",
    title: "Brookly Nine-Nine",
    director: "",
    cast: ["Melissa Fumero"],
    country: "USA",
    date_added: "2016",
    release_year: 2011,
    rating: "5 stars",
    duration: "6 seasons",
    listed_in: ["best comedies"],
    description: "Fucking hilarious",
  },
];
const LandingPage: React.FC = () => {
  return (
    <div css={LandingStyle}>
      <h1>Netflix Webapp</h1>
      <p>----------------</p>
      <ListView list={data} />
    </div>
  );
};

export default LandingPage;
