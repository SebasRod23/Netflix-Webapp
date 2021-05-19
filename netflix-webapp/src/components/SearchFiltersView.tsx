import React from "react";
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

interface ActiveProps {
  activeComp: string;
  setActiveComp?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFiltersViews: React.FC<ActiveProps> = ({ activeComp }) => {
  const [filterOptions, setFilterOptions] = React.useState("");
  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterOptions(event.target.value as string);
  };
  const searchOptions = ["Movie", "Actor", "TvShow"];
  const statisticsOptions = ["General", "Country", "Release"];
  let listOptions = activeComp === "search" ? searchOptions : statisticsOptions;
  return (
    <div>
      <Autocomplete
        id="search-bar"
        options={data.map((data) => data.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search info" margin="normal" />
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
          {listOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
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
