import React, { useState } from 'react';
import Chart from './Chart';
import SingleStatistics from './SingleStatistics';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const StatisticsStyle = css({
  padding: '1em',
  fontSize: '2rem',
  display: 'flex',
  flexDirection: 'column',
  'h1':{
    fontSize: '3rem',
    alignSelf:'center'
}
});
interface StatisticsProps{
  type:string,
  input:string
}
//const StatisticsView: React.FC<StatisticsProps> = ({ type,input }) => {
const StatisticsView: React.FC= () => {
  const [input, setInput]=useState('')
  //let renderedComp = input === '' ? <Chart typeProps={type}/> : <SingleStatistics input={input} type={type}/>;
  let renderedComp = input === '' ? <Chart typeProps='all'/> : <SingleStatistics input='Brazil' type='country'/>;
  return (
    <div css={StatisticsStyle}>
      {//<h1>Statistics {type}</h1>
      }
      <h1>Statistics</h1>
      {renderedComp}
    </div>
  );
};

export default StatisticsView;
