import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import MultimediaModal from './MultimediaModal';
import axios, { AxiosResponse } from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const ViewStyle = css({
  padding: '2rem',
});

const ListStyle = css({
  width: '100%',
  minHeight: 'calc(100vh - 96px)',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
});

const ELementBox = ({ color }: { color: String }) =>
  css({
    margin: '1em',
    width: '12.5em',
    height: '5em',
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor:
      color === 'Movie' ? 'rgb(77, 77, 77, 32%)' : 'rgb(245, 245, 245, 32%)',
    color: 'white',
    borderRadius: '10px',
    textAlign: 'center',
  });

const ButtonDivStyle = css({
  display: 'flex',
  width: '45%',
  margin: 'auto',
  justifyContent: 'space-around',
  padding: '1rem',
});

const ButtonStyle = css({
  '@keyframes appear': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '100%',
    },
  },
  backgroundColor: '#781c16',
  padding: '0.75em 1.25em',
  cursor: 'pointer',
  fontSize: '1.25rem',
  width: '4em',
  textAlign: 'center',
  borderRadius: '10px',
  fontWeight: 500,
  animation: '0.25s ease-out 0s 1 appear',
});

interface IData {
  show_id: string;
  type: 'Movie' | 'TV Show';
  title: string;
  director: string;
  cast: string;
  country: string;
  date_added: string;
  release_year: number;
  rating: string;
  duration: string;
  listed_in: string;
  description: string;
}

interface ListProps {
  routeSearch: string;
}

const ListView: React.FC<ListProps> = ({ routeSearch }) => {
  const [finalRoute, setFinalRoute] = useState('/movie');
  const [data, setData] = useState<IData[]>([]);
  const limit = 20;
  const [pagina, setPagina] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [elementData, setElementData] = useState<IData>({
    show_id: '',
    type: 'Movie',
    title: '',
    director: '',
    cast: '',
    country: '',
    date_added: '',
    release_year: 0,
    rating: '',
    duration: '',
    listed_in: '',
    description: '',
  });

  const handleOpen = (elementData: IData) => {
    setOpen(true);
    setElementData(elementData);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changePage = (offset: number) => {
    setPagina(pagina + offset);
    setLoading(true);
  };

  const fetchData = async (route: string): Promise<AxiosResponse<any>> => {
    try {
      console.log(finalRoute);
      const skip = pagina * limit;
      const data: AxiosResponse<any> = await axios.get(
        'http://localhost:3010/list/movie',
        {
          params: {
            skip: skip,
            limit: limit,
          },
        }
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getData = () => {
    fetchData(finalRoute)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    console.log('UE --> ' + routeSearch);
    setFinalRoute(routeSearch);
  }, [routeSearch]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagina]);

  return (
    <div css={ViewStyle}>
      <div css={ListStyle}>
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          data.map((element) => (
            <div
              css={ELementBox({ color: element.type })}
              onClick={() => handleOpen(element)}
              key={element.show_id}
            >
              <h2>{element.title}</h2>
            </div>
          ))
        )}

        <MultimediaModal
          data={elementData}
          open={open}
          handleClose={handleClose}
        />
      </div>
      <div css={ButtonDivStyle}>
        {pagina !== 0 && (
          <div css={ButtonStyle} onClick={() => changePage(-1)}>
            Previous
          </div>
        )}

        <div css={ButtonStyle} onClick={() => changePage(1)}>
          Next
        </div>
      </div>
    </div>
  );
};

export default ListView;
