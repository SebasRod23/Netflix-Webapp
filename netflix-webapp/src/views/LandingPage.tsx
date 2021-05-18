import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import HeaderView from "../components/HeaderView";

const LandingStyle = css({
  padding: "1em",
  fontWeight: 500,
  fontSize: "3rem",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
});

const LandingPage: React.FC = () => {
  return (
    <div>
      <HeaderView />
      {/* <div css={LandingStyle}>
        <h1>Netflix Webapp</h1>
      </div> */}
    </div>
  );
};

export default LandingPage;
