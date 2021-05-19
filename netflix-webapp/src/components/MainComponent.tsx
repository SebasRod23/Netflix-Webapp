import React from "react";
import ListView from "./ListView";
import SearchFiltersViews from "./SearchFiltersView";
import StatisticsView from "./StatisticsView.component";

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
    release_year: 2013,
    rating: "5 stars",
    duration: "6 seasons",
    listed_in: ["best comedies"],
    description: "Fucking hilarious",
  },
];

interface ActiveProps {
  activeComp: string;
  setActiveComp?: React.Dispatch<React.SetStateAction<string>>;
}

const MainComponent: React.FC<ActiveProps> = ({ activeComp }) => {
  let renderedComp =
    activeComp === "search" ? <ListView list={data} /> : <StatisticsView />;
  return (
    <div>
      <SearchFiltersViews activeComp={activeComp} />
      {renderedComp}
    </div>
  );
};

export default MainComponent;
