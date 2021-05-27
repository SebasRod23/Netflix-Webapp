import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios, { AxiosResponse } from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@material-ui/core';

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
  routeSearch: string;
  setRouteSearch: (route: string) => void;
}

const SearchFiltersViews: React.FC<ActiveProps> = ({
  activeComp,
  routeSearch,
  setRouteSearch,
}) => {
  const [filterOptions, setFilterOptions] = React.useState('Movie');
  const [input, setInput] = useState('');
  const searchOptions = ['Movie', 'Actor', 'TvShow'];
  const statisticsOptions = ['General', 'Country', 'Year'];
  const [data, setData] = useState([]);
  const handleChangeSelect = async (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    event.preventDefault();
    setFilterOptions(event.target.value as string);
    setInput('');
  };

  const handleOnClick = () => {
    let route: string = filterOptions.toLowerCase() + input;
    setRouteSearch(route);
  };

  /*const handleChangeSearch = async (value: string | null) => {
    let inputValue = value !== null ? value : '';
    try {
      const options: AxiosResponse<any> = await axios.get(
        'http://localhost:3010/search/' + filterOptions.toLowerCase() + 'List',
        {
          params: {
            searchValue: inputValue,
          },
        },
      );
      setData(options.data);
    } catch (error) {
      throw new Error(error);
    }
  };
*/
  let listOptions = activeComp === 'search' ? searchOptions : statisticsOptions;
  useEffect(() => {
    setFilterOptions(activeComp === 'search' ? 'Movie' : 'General');
  }, [activeComp]);

  useEffect(() => {
    const getStatsList = async () => {
      try {
        const options: AxiosResponse<any> = await axios.get(
          'http://localhost:3010/statistics/' +
            filterOptions.toLowerCase() +
            'List'
        );
        setData(options.data);
        return options;
      } catch (error) {
        throw new Error(error);
      }
    };

    const getSearchList = async () => {
      try {
        const options: AxiosResponse<any> = await axios.get(
          'http://localhost:3010/search/' + filterOptions.toLowerCase() + 'List'
        );
        setData(options.data);
      } catch (error) {
        throw new Error(error);
      }
    };

    if (activeComp !== 'search') {
      setRouteSearch(filterOptions.toLowerCase());
      if (filterOptions === 'Country' || filterOptions === 'Year') {
        getStatsList();
      }
    } else {
      setRouteSearch(filterOptions.toLowerCase());
    }
  }, [activeComp, filterOptions]);

  useEffect(() => {
    const getSearchList = async () => {
      try {
        const options: AxiosResponse<any> = await axios.get(
          'http://localhost:3010/search/' + filterOptions.toLowerCase() + 'List'
        );
        setData(options.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    if (activeComp === 'search') {
      getSearchList();
    }
  }, [input]);

  return (
    <div css={divStyles}>
      {filterOptions !== 'General' && (
        <Autocomplete
          css={inputStyle}
          id="search-bar"
          onInputChange={(event, value: string | null) => {
            setInput(value !== null ? '/' + value : '');
          }}
          onChange={(event: any, value: string | null) => {
            setInput(value !== null ? '/' + value : '');
          }}
          options={data.map((data) => data)}
          renderInput={(params) => (
            <TextField {...params} label="Search info" margin="normal" />
          )}
        />
      )}
      <FormControl>
        <InputLabel id="options-label" css={InputLabelStyles}>
          Options
        </InputLabel>
        <Select
          css={selectStyle}
          labelId="options-label"
          id="options"
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
      {filterOptions !== 'General' && (
        <Button
          variant="contained"
          color="secondary"
          startIcon={<SearchIcon />}
          css={buttonStyle}
          onClick={() => handleOnClick()}
        >
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchFiltersViews;
