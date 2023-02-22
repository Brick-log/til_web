import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CSSProperties } from '@emotion/serialize';
import { BACKGROUND_COLOR, POINT_COLOR, FONT_COLOR } from '@/constants/color';
import { mq } from '@/styles/mediaQuery';

export const TimeLineContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 110px;
  background: ${BACKGROUND_COLOR.NAVY_3};
  border-radius: 6px;
  padding: 20px 16px 12px 24px;
  ${mq('desktop')} {
    padding: 20px 36px 12px 24px;
  }
`;

export const TimeLineContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  // input max-width, min-width 적용
  > div:first-of-type {
    max-width: 410px;
    min-width: 180px;
    flex-grow: 1;
  }
`;
export const TimeLineDate = styled.div`
  margin-bottom: 8px;
`;

export const TimeLineSaveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
`;
export const TimeLineCancelButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const timeLineBodyCss = ({ width }: { width: CSSProperties['width'] }) => css`
  width: 180px;
  cursor: pointer;
  p,
  H1,
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  span {
    display: block;
  }
  ${mq('desktop')} {
    width: ${width}px;
  }
`;

export const TimeLineTitle = styled.div`
  ${() => timeLineBodyCss({ width: 273 })}
  margin-bottom: 6px;
`;

export const TimeLineDesc = styled.div`
  ${() => timeLineBodyCss({ width: 400 })}
`;

export const TimeLineImage = styled.div`
  > img {
    min-width: 37px;
    height: 37px;
    border-radius: 50%;
  }
`;

const inputCss = ({
  width,
  height,
  fontWeight,
  fontSize,
  lineHeight,
  color,
}: {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  fontWeight: CSSProperties['fontWeight'];
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
  color: CSSProperties['color'];
}) => css`
  display: inline-block;
  width: ${width};
  height: ${height};
  background-color: transparent;
  border-bottom: 2px solid ${BACKGROUND_COLOR.FIELD_10};
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  color: ${color};
  margin-right: 0px;
  ${mq('desktop')} {
    margin-right: 6px;
  }

  &:focus {
    border-bottom: 2px solid ${POINT_COLOR.MAIN};
  }
`;

export const TimeLineTitleInput = styled.input`
  ${inputCss({
    width: 'calc(100% - 50px)',
    height: '100%',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: FONT_COLOR.WHITE,
  })}
`;

export const TimeLineDescInput = styled.input`
  ${inputCss({
    width: 'calc(100% - 50px)',
    height: '100%',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    color: FONT_COLOR.GRAY_3,
  })}
`;

export const TimeLineInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mq('desktop')} {
    padding-right: 0px;
  }
`;

export const TimeLineTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  margin-bottom: 6px;
`;

export const TimeLineDescWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 19px;
`;