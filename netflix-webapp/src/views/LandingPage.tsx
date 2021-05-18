import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import HeaderView from "../components/HeaderView";
import SearchFiltersViews from "../components/SearchFiltersView";

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
    <div>
      <HeaderView />
      <SearchFiltersViews />
      {/* <div css={LandingStyle}>
        <h1>Netflix Webapp</h1>
      </div> */}
    </div>
  );
};

export default LandingPage;
