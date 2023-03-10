import type { NextPage } from 'next';
import { css } from '@emotion/react';

import { Dropdown } from '../../components/Dropdown';
import { useState } from 'react';

const Home: NextPage = () => {
  const [optionList, setOptionList] = useState([
    { id: 'develop', name: 'π€ κ°λ°' },
    { id: 'planning', name: 'π€ κΈ°ν' },
    { id: 'design', name: 'π€ λμμΈ' },
    { id: 'marketing', name: 'π€ λ§μΌν' },
    { id: 'startup', name: 'π€ μ€ννΈμ' },
    { id: 'etc', name: 'π€ κΈ°ν' },
  ]);
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 200px;
          height: 500px;
          justify-content: center;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Dropdown optionList={optionList} />
      </div>
      <div
        css={css`
          display: flex;
          height: 500px;
          justify-content: center;
        `}
      ></div>
    </div>
  );
};

export default Home;
