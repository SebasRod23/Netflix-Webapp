import React from 'react';
import ListView from './ListView';
import SearchFiltersViews from './SearchFiltersView';
import StatisticsView from './StatisticsView';

interface ActiveProps {
  activeComp: string;
  setActiveComp?: React.Dispatch<React.SetStateAction<string>>;
}

const MainComponent: React.FC<ActiveProps> = ({ activeComp }) => {
  let renderedComp =
    activeComp === 'search' ? <ListView /> : <StatisticsView />;
  return (
    <div>
      <SearchFiltersViews activeComp={activeComp} />
      {renderedComp}
    </div>
  );
};

export default MainComponent;
