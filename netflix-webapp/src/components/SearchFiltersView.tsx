import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import Autocomplete from "@material-ui/lab/Autocomplete";
/** @jsxImportSource @emotion/react */ import {
  TextField,
  Select,
} from "@material-ui/core";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

const SearchFiltersViews: React.FC = () => {
  return (
    <div>
      <Autocomplete
        id="search-bar"
        options={top100Films.map((movie) => movie.title)}
        renderInput={(params) => (
          <TextField {...params} label="Movie" margin="normal" />
        )}
      />
      <h1>Search Filters</h1>
    </div>
  );
};

export default SearchFiltersViews;
