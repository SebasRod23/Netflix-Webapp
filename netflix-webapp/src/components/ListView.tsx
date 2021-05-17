import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import MultimediaModal from "./MultimediaModal";

const ListStyle = css({
  backgroundColor: "blue",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const ELementBox = ({ color }: { color: String }) =>
  css({
    margin: "1em",
    width: "12.5em",
    height: "5em",
    fontSize: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: color === "uno" ? "#423D3D" : "#E3CFCF",
    color: color === "uno" ? "white" : "black",
  });
interface ListPrompts {
  data: string[];
}

const ListView: React.FC<ListPrompts> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [elementData, setElementData] = useState("");
  const handleOpen = (elementData: string) => {
    setOpen(true);
    setElementData(elementData);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div css={ListStyle}>
      {data.map((element) => (
        <div
          css={ELementBox({ color: element })}
          onClick={() => handleOpen(element)}
        >
          <h2>{element}</h2>
        </div>
      ))}
      <MultimediaModal
        data={elementData}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ListView;
