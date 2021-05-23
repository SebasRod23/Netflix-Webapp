import React from 'react';
import Chart from './Chart';
import SingleStatistics from './SingleStatistics';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const StatisticsStyle = css({
  padding: '1em',
  fontSize: '2rem',
  display: 'flex',
  flexDirection: 'column',
  h1: {
    fontSize: '3rem',
    alignSelf: 'center',
  },
});
interface StatisticsProps {
  routeSearch: string;
}

const StatisticsView: React.FC<StatisticsProps> = ({ routeSearch }) => {
  let renderedComp =
    routeSearch.split('/').length === 1 ? (
      <Chart routeSearch={routeSearch} />
    ) : (
      <SingleStatistics routeSearch={routeSearch} />
    );
  return (
    <div css={StatisticsStyle}>
      <h1>Statistics {routeSearch.split('/')[0]}</h1>
      {renderedComp}
    </div>
  );
};

export default StatisticsView;
