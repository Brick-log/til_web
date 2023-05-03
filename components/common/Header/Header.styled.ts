import { POINT_COLOR } from '@/constants/color';
import { css } from '@emotion/react';

const container = css`
  position: fixed;
  z-index: 999; // TODO Z-Index
  width: 100%;
  height: 80px;
`;

const inner = ({ isMobile }: { isMobile: boolean }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 20px 20px 24px;
  max-width: 1920px;
  margin: 0 ${isMobile ? 0 : '58px'};
`;

const logoContainer = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${POINT_COLOR.MAIN};
  border-radius: 8px;
`;

const styles = { container, inner, logoContainer, btn };

export default styles;