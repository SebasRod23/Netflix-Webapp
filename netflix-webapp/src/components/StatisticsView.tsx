import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";

const StatisticsStyle = css({
  padding: "1em",
  fontSize: "2rem",
  display:"flex",
  flexDirection:"column",
  minHeight:"100%"
  }
  );
  const StatisticsView: React.FC = () => {
    return (
      <div css={StatisticsStyle}>
        <h1>Statistics</h1>
        <p>This is my hello world</p>
      </div>
    );
  };
  
  export default StatisticsView;