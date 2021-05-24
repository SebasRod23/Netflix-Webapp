import React, { useState } from "react";
import ListView from "./ListView";
import SearchFiltersViews from "./SearchFiltersView";
import StatisticsView from "./StatisticsView";

interface ActiveProps {
  activeComp: string;
  setActiveComp?: React.Dispatch<React.SetStateAction<string>>;
}

const MainComponent: React.FC<ActiveProps> = ({ activeComp }) => {
  const [routeSearch, setRouteSearch] = useState("");
  let renderedComp =
    activeComp === "search" ? (
      <ListView />
    ) : (
      <StatisticsView routeSearch={routeSearch} />
    );
  return (
    <div>
      <SearchFiltersViews
        activeComp={activeComp}
        routeSearch={routeSearch}
        setRouteSearch={setRouteSearch}
      />
      {renderedComp}
    </div>
  );
};

export default MainComponent;
