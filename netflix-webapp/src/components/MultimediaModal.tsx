import React from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import { Modal } from "@material-ui/core";

const ModalStyle = css({
  width: "80%",
  height: "80vh",
  margin: "10vh auto",
  color: "white",
});
const CloseBttnStyle = css({
  "@keyframes left": {
    "0%": {
      transform: "rotate(0deg)",
      opacity: "50%",
    },
    "100%": {
      transform: "rotate(-45deg)",
      opacity: "100%",
    },
  },
  "@keyframes right": {
    "0%": {
      transform: "rotate(0deg)",
      opacity: "50%",
    },
    "100%": {
      transform: "rotate(45deg)",
      opacity: "100%",
    },
  },
  width: "30px",
  height: "30px",
  cursor: "pointer",
  float: "right",
  margin: "1em",
  position: "absolute",

  div: {
    height: "4px",
    width: "30px",
    marginTop: "12px",
    backgroundColor: "white",
    position: "absolute",
  },
  "div:first-child": {
    animation: "0.5s ease-out 0s 1 left",
    transform: "rotate(-45deg)",
  },
  "div:last-child": {
    animation: "0.5s ease-out 0s 1 right",
    transform: "rotate(45deg)",
  },
});
const ContentStyle = css({
  backgroundColor: "rgb(22, 23, 26)",
  padding: "1em",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  overflowX: "hidden",
  overflowY: "auto",
  span: {
    fontWeight: "bold",
    marginRight: "1em",
  },
});

const TitleStyle = css({
  fontSize: "3.5rem",
  textAlign: "center",
  width: "90%",
  div: {
    width: "70%",
    borderBottom: "1px solid white",
    margin: "5px auto 0",
  },
});
const WrapperStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "90%",
});
const LeftStyle = css({
  minWidth: "25%",
  padding: "0 1em 1em",
  marginRight: "1em",
  h2: {
    marginTop: "1em",
  },
});
const RightStyle = css({
  padding: "1em",
  textAlign: "justify",
  p: {
    marginBottom: "1em",
  },
  h2: {
    margin: "1em 0",
  },
  div: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    h3: {
      margin: "0.5em",
      padding: "0.5em",
      backgroundColor: "black",
    },
  },
});
const TagsStyle = css({
  textAlign: "center",
  div: {
    marginTop: "1em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    h3: {
      fontSize: "0.75rem",
      margin: "0.5em",
      padding: "0.5em",
      backgroundColor: "black",
    },
  },
});
interface ModalPrompts {
  data: {
    show_id: string;
    type: "Movie" | "TV Show";
    title: string;
    director: string;
    cast: string[];
    country: string;
    date_added: string;
    release_year: number;
    rating: string;
    duration: string;
    listed_in: string[];
    description: string;
  };
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
        <div onClick={handleClose} css={CloseBttnStyle}>
          <div></div>
          <div></div>
        </div>
        <div css={ContentStyle}>
          <div css={TitleStyle}>
            <h1>{data.title}</h1>
            <div></div>
          </div>

          <div css={WrapperStyle}>
            <div css={LeftStyle}>
              {data.director !== undefined && data.director !== "" ? (
                <h2>
                  <span>Director:</span> {data.director}
                </h2>
              ) : (
                <h2>Director not available</h2>
              )}
              <h2>
                <span>Release year:</span> {data.release_year}
              </h2>
              {data.country !== undefined && data.country !== "" ? (
                <h2>
                  <span>Country:</span> {data.country}
                </h2>
              ) : (
                <h2>Country not available</h2>
              )}
              {data.rating !== undefined && data.rating !== "" ? (
                <h2>
                  <span>Rating:</span> {data.rating}
                </h2>
              ) : (
                <h2>Rating not available</h2>
              )}
              {data.date_added !== undefined && data.date_added !== "" ? (
                <h2>
                  <span>Available since:</span> {data.date_added}
                </h2>
              ) : (
                <h2>Date added not available</h2>
              )}
            </div>
            <div css={RightStyle}>
              <p>
                <span>Description:</span> {data.description}
              </p>
              {data.type === "Movie" ? (
                <h2>
                  <span>Length:</span> {data.duration}
                </h2>
              ) : (
                <h2>
                  <span>Number of seasons:</span> {data.duration}
                </h2>
              )}
              <span>Cast:</span>
              {data.cast !== null && data.cast.length > 0 ? (
                <div>
                  {data.cast.map((actor) => (
                    <h3>{actor}</h3>
                  ))}
                </div>
              ) : (
                <h3>Cast not available</h3>
              )}
            </div>
          </div>

          <div css={TagsStyle}>
            <span>Tags:</span>
            <div>
              {data.listed_in.map((tag) => (
                <h3>{tag}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MultimediaModal;
