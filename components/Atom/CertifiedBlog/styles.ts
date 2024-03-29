import styled from '@emotion/styled';
import { FONT_COLOR, BACKGROUND_COLOR } from '@/constants/color';
import { mq } from '@/styles/mediaQuery';

export const CertifiedBlogContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 345px;
  min-width: 300px;
  height: 45px;
  background: ${BACKGROUND_COLOR.NAVY_4};
  border-radius: 12px;
  padding: 10px 10px 10px 24px;
`;

// 블로그 이름이 길다면 어떻게 할것 인가??
export const CertifiedBlogName = styled.div`
  margin-left: 8px;
  width: 186px;
  ${mq('desktop')} {
    width: 234px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 18px;
`;

export const InputField = styled.input`
  position: relative;
  display: inline-block;
  height: 24px;
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 22px;
  color: ${FONT_COLOR.WHITE};
  width: 100%;
  text-overflow: ellipsis;
`;
