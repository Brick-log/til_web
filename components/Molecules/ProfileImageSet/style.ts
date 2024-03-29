import styled from '@emotion/styled';
import { mq } from '@/styles/mediaQuery';

const SetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  justify-items: center;
  width: 100%;
  padding: 50px 10px 62px 10px;
  ${mq('desktop')} {
    padding: 36px 80px 24px 80px;
    row-gap: 28px;
  }
`;

export { SetContainer };
