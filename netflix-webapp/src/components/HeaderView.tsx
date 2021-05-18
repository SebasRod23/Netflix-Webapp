import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */ import { Button } from "@material-ui/core";

const HeaderStyle = css({
  padding: "1em",
  backgroundColor: "black",
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
});

const DivTitleStyle = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const HeaderTitle = css({
  fontWeight: 500,
  fontSize: "3rem",
  color: "white",
});

const HeaderView: React.FC = () => {
  const [activeButton, setActiveButton] = useState("search");

  const handleActiveBut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setActiveButton(event.currentTarget.id);
  };

  return (
    <div css={HeaderStyle}>
      <div css={DivTitleStyle}>
        <h1 css={HeaderTitle}>Netflix Webapp</h1>
      </div>
      <div css={DivTitleStyle}>
        <Button
          id="search"
          style={{ color: activeButton === "search" ? "red" : "white" }}
          onClick={handleActiveBut}
        >
          SEARCH
        </Button>
        <Button
          id="statistics"
          style={{ color: activeButton === "statistics" ? "red" : "white" }}
          onClick={handleActiveBut}
        >
          STATISTICS
        </Button>
      </div>
    </div>
  );
};

export default HeaderView;
