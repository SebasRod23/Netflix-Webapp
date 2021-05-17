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
    show_id: "1",
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
    show_id: "2",
    type: "TV Show",
    title: "B99",
    director: "Someone",
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
  console.log(data);
  return (
    <div css={LandingStyle}>
      <h1>Netflix Webapp</h1>
      <p>----------------</p>
      <ListView list={data} />
    </div>
  );
};

export default LandingPage;
