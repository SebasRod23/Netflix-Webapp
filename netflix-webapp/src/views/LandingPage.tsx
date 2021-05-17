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
const data = [
  "uno",
  "dos",
  "tres",
  "uno",
  "dos",
  "tres",
  "uno",
  "dos",
  "tres",
  "uno",
  "dos",
  "tres",
];
const LandingPage: React.FC = () => {
  return (
    <div css={LandingStyle}>
      <h1>Netflix Webapp</h1>
      <p>----------------</p>
      <ListView data={data} />
    </div>
  );
};

export default LandingPage;
