import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';

const data = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
const inputStyle = css({
  width: '30%',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  '> div': {
    position: 'absolute',
    maxWidth: '30%',
    margin: '0',
  },
  'div label': {
    color: '#c1c1c1',
  },
  'div div input': {
    color: 'white',
  },
  'div div': {
    borderBottom: '1px solid white',
    color: 'white',
  },
  'div div div ': {
    borderBottom: 'none',
  },
  'div div div button': {
    color: 'rgb(255,255,255,54%)',
    borderBottom: 'none',
  },
});
const selectStyle = css({
  '&&': {
    width: '150px',
    height: '50px',
    color: 'white',
    margin: 0,
    '> div': {
      width: '100%',
    },
    div: {
      borderBottom: '1px solid white',
      color: 'white',
      marginTop: '16px',
    },
    svg: {
      color: 'white',
    },
  },
});
const divStyles = css({
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  maxHeight: '100px',
});
const buttonStyle = css({
  maxHeight: '50px',
  width: '10rem',
});
const InputLabelStyles = css({
  '&&': {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '50px',
    color: 'white',
    label: {
      color: 'white',
    },
  },
});
interface ActiveProps {
  activeComp: string;
  //setActiveComp?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFiltersViews: React.FC<ActiveProps> = ({ activeComp }) => {
  const [filterOptions, setFilterOptions] = React.useState('General');
  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilterOptions(event.target.value as string);
  };
  const searchOptions = ['Movie', 'Actor', 'TvShow'];
  const statisticsOptions = ['General', 'Country', 'Release'];
  let listOptions = activeComp === 'search' ? searchOptions : statisticsOptions;
  useEffect(() => {
    setFilterOptions(activeComp === 'search' ? 'Movie' : 'General');
  }, [activeComp]);
  return (
    <div css={divStyles}>
      {filterOptions !== 'General' && (
        <Autocomplete
          css={inputStyle}
          id='search-bar'
          options={data.map((data) => data.title)}
          renderInput={(params) => (
            <TextField {...params} label='Search info' margin='normal' />
          )}
        />
      )}
      <FormControl>
        <InputLabel id='options-label' css={InputLabelStyles}>
          Options
        </InputLabel>
        <Select
          css={selectStyle}
          labelId='options-label'
          id='options'
          value={filterOptions}
          onChange={handleChangeSelect}
          displayEmpty
        >
          {listOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<SearchIcon />}
        css={buttonStyle}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchFiltersViews;
