import React from "react";
import Chart from "./Chart"
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";


const StatisticsStyle = css({
  padding: "1em",
  height: "67vh ",
  fontSize: "2rem",
  display:"flex",
  flexDirection:"column",

});
  
const StatisticsView: React.FC = () => {
  return (
    <div css={StatisticsStyle}>
      <h1>Statistics</h1>
      <Chart/>
    </div>
  );
};
  
  export default StatisticsView;