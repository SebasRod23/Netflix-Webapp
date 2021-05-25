import React from 'react';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */ import { Button } from '@material-ui/core';

const HeaderStyle = css({
  padding: '1em',
  backgroundColor: 'black',
  width: '90%',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto 3rem',
});

const DivTitleStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const HeaderTitle = css({
  fontWeight: 500,
  fontSize: '3rem',
  color: 'white',
});

interface ActiveProps {
  activeComp: string;
  setActiveComp: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderView: React.FC<ActiveProps> = ({ activeComp, setActiveComp }) => {
  const handleActiveBut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setActiveComp(event.currentTarget.id);
  };

  return (
    <div css={HeaderStyle}>
      <div css={DivTitleStyle}>
        <h1 css={HeaderTitle}>Netflix Webapp</h1>
      </div>
      <div css={DivTitleStyle}>
        <Button
          id="search"
          style={{ color: activeComp === 'search' ? 'red' : 'white' }}
          onClick={handleActiveBut}
        >
          SEARCH
        </Button>
        <Button
          id="statistics"
          color="primary"
          style={{ color: activeComp === 'statistics' ? 'red' : 'white' }}
          onClick={handleActiveBut}
        >
          STATISTICS
        </Button>
      </div>
    </div>
  );
};

export default HeaderView;
