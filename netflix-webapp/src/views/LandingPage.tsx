import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";

const LandingStyle = css({
  padding: "1em",
  fontWeight: 500,
  textAlign: "center",
  backgroundColor: "#141313",
  color: "white",
  h1: {
    fontSize: "3rem",
  },
});

const LandingPage: React.FC = () => {
  return (
    <div css={LandingStyle}>
      <h1>Netflix Webapp</h1>
    </div>
  );
};

export default LandingPage;
