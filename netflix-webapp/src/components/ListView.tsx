import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import MultimediaModal from "./MultimediaModal";

const ListStyle = css({
  width: "100%",
  minHeight: "calc(100vh - 96px)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
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
    backgroundColor:
      color === "Movie" ? "rgb(77, 77, 77, 32%)" : "rgb(245, 245, 245, 32%)",
    color: "white",
    borderRadius: "10px",
  });
interface ListPrompts {
  list: {
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
  }[];
}

const ListView: React.FC<ListPrompts> = ({ list }) => {
  const [open, setOpen] = useState(false);
  const [elementData, setElementData] = useState({
    show_id: "",
    type: "Movie",
    title: "",
    director: "",
    cast: [""],
    country: "",
    date_added: "",
    release_year: 0,
    rating: "",
    duration: "",
    listed_in: [""],
    description: "",
  } as {
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
  });
  const handleOpen = (elementData: {
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
  }) => {
    setOpen(true);
    setElementData(elementData);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div css={ListStyle}>
      {list.map((element) => (
        <div
          css={ELementBox({ color: element.type })}
          onClick={() => handleOpen(element)}
          key={element.show_id}
        >
          <h2>{element.title}</h2>
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
