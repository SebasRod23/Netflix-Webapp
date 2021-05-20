import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import HeaderView from "../components/HeaderView";
import MainComponent from "../components/MainComponent";

const landingPageStyle=css({
  backgroundColor:"black",
  color:"white"
})
const LandingPage: React.FC = () => {
  const [activeComp, setActiveComp] = useState<string>("search");
  return (
    <div css={landingPageStyle}>
      <HeaderView activeComp={activeComp} setActiveComp={setActiveComp} />
      <MainComponent activeComp={activeComp} />
    </div>
  );
};

export default LandingPage;
