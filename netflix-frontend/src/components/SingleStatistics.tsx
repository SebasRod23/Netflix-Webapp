import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const chartCss = css({
  width: '100%',
  minHeight: '55vh',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  margin: '10px',
  div: {
    width: '40%',
    margin: 'auto',
    backgroundColor: '#2a3333',
    padding: '1em',
    textAlign: 'center',
  },
  h2: {
    alignSelf: 'center',
    marginBottom: '20px',
  },
  h3: {
    alignSelf: 'center',
    margin: '20px',
    color: '#781c16',
    fontWeight: 500,
  },
});

interface StatisticsProps {
  routeSearch: string;
}
const SingleStatistics: React.FC<StatisticsProps> = ({ routeSearch }) => {
  const [label, setLabel] = useState('Not found');
  const [numLabel, setNumLabel] = useState('');

  const getSingleStats = async (route: string): Promise<AxiosResponse<any>> => {
    try {
      console.log(route);
      const numCountry: AxiosResponse<any> = await axios.get(
        'https://netflix-webapp-adb.herokuapp.com/statistics/' + route,
      );
      console.log(numCountry.data);
      return numCountry;
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    setLabel('Not found');
    setNumLabel('');
    getSingleStats(routeSearch).then((res) => {
      setLabel(res.data.label);
      setNumLabel(res.data.number);
    });
  }, [routeSearch]);

  return (
    <div css={chartCss}>
      <div>
        <h2>{label}</h2>
        <h3>{numLabel}</h3>
      </div>
    </div>
  );
};

export default SingleStatistics;
