import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import { Modal } from "@material-ui/core";

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
  data: String[];
}

const ListView: React.FC<ListPrompts> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div css={ListStyle}>
      {data.map((element) => (
        <div css={ELementBox({ color: element })} onClick={handleOpen}>
          <h2>{element}</h2>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h1 style={{ color: "wheat" }}>Hello World</h1>
      </Modal>
    </div>
  );
};

export default ListView;
