import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
import MultimediaModal from './MultimediaModal';
import axios, { AxiosResponse } from 'axios';

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

const ButtonStyle = css({
  backgroundColor: 'red',
  padding: '1rem',
  cursor: 'pointer',
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

const ListView: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const limit = 20;
  const [pagina, setPagina] = useState(200);

  const fetchData = async (): Promise<AxiosResponse<any>> => {
    try {
      const skip = pagina * limit;
      const body = { skip, limit };
      const data: AxiosResponse<any> = await axios.post(
        'http://localhost:3010/',
        body,
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getData = () => {
    fetchData()
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err: Error) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

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
    getData();
  };

  return (
    <div>
      <div css={ListStyle}>
        {data.map((element) => (
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
      <div css={ButtonStyle} onClick={() => changePage(1)}>
        Siguiente
      </div>
      <div css={ButtonStyle} onClick={() => changePage(-1)}>
        Anterior
      </div>
    </div>
  );
};

export default ListView;
