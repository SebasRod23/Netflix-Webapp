import React, { useState } from "react";
/** @jsxImportSource @emotion/react */ import Autocomplete from "@material-ui/lab/Autocomplete";
/** @jsxImportSource @emotion/react */ import SearchIcon from "@material-ui/icons/Search";
/** @jsxImportSource @emotion/react */ import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";

const data = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

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
}

const SearchFiltersViews: React.FC = () => {
  const [filterOptions, setFilterOptions] = React.useState("");
  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterOptions(event.target.value as string);
  };
  return (
    <div>
      <Autocomplete
        id="search-bar"
        options={data.map((data) => data.title)}
        renderInput={(params) => (
          <TextField {...params} label="Movie" margin="normal" />
        )}
      />
      <FormControl>
        <InputLabel id="options-label">options</InputLabel>
        <Select
          labelId="options-label"
          id="options"
          value={filterOptions}
          onChange={handleChangeSelect}
        >
          <MenuItem value={"Movie"}>Movie</MenuItem>
          <MenuItem value={"Actor"}>Actor</MenuItem>
          <MenuItem value={"Tv Show"}>Tv Show</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="secondary" startIcon={<SearchIcon />}>
        Search
      </Button>
      <h1>Search Filters</h1>
    </div>
  );
};

export default SearchFiltersViews;
