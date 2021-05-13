import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";

const LandingStyle = css({
  color: "red",
  fontWeight: 500,
  fontSize: "3rem",
  textAlign: "center",
});

const LandingPage: React.FC = () => {
  return (
    <div css={LandingStyle}>
      <h1>Netflix Webapp</h1>
    </div>
  );
};

export default LandingPage;
