import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import HeaderView from "../components/HeaderView";
import MainComponent from "../components/MainComponent";

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
  const [activeComp, setActiveComp] = useState<string>("search");
  return (
    <div>
      <HeaderView activeComp={activeComp} setActiveComp={setActiveComp} />
      <MainComponent activeComp={activeComp} />
    </div>
  );
};

export default LandingPage;
