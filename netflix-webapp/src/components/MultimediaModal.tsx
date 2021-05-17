import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import { Modal } from "@material-ui/core";

const ModalStyle = css({
  backgroundColor: "red",
  width: "90%",
  height: "90vh",
  margin: "5vh auto",
});

interface ModalPrompts {
  data: String;
  open: boolean;
  handleClose: () => void;
}

const MultimediaModal: React.FC<ModalPrompts> = ({
  data,
  open,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div css={ModalStyle}>
        <h2>{data}</h2>
      </div>
    </Modal>
  );
};

export default MultimediaModal;
