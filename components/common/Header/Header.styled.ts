import { POINT_COLOR } from '@/constants/color';
import { Z_INDEX_LEVEL } from '@/constants/zIndex';
import { mq } from '@/styles/mediaQuery';
import { css } from '@emotion/react';

const container = css`
  position: fixed;
  z-index: ${Z_INDEX_LEVEL['HEADER']}; // TODO Z-Index
  width: 100%;
  height: 80px;
`;

const headerBlurContainer = css`
  width: calc(100% - 18px);
  backdrop-filter: blur(9.5px);
  height: inherit;
`;

const inner = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px 20px 19px 24px;
  max-width: 1920px;
  margin: 0 0;
  ${mq('desktop')} {
    margin: 0 58px;
  }
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const loginBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${POINT_COLOR.MAIN};
  border-radius: 8px;
`;

const headerContentList = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const otherBtns = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  ${mq('desktop')} {
    gap: 44px;
  }
`;
const styles = { container, headerBlurContainer, inner, logoContainer, loginBtn, headerContentList, otherBtns };

export default styles;
