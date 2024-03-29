import styled from '@emotion/styled';
import { mq } from '@/styles/mediaQuery';
import { ColumnTemplate } from '@/styles/cardview.module';

export const PopularCardViewContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: inherit;
  column-gap: inherit;
  row-gap: inherit;
  position: relative;
  height: fit-content;
  grid-column: span 1 / auto;
  margin-bottom: 32px;

  @media screen and (min-width: 780px) {
    grid-column: span 4 / auto;
  }

  ${mq('desktop')} {
    grid-column: span 6 / auto;
  }
`;
export const PopularCardHeader = styled.div`
  margin-bottom: 20px;
`;
export const PopularCardContent = styled.div<{ isEmpty: boolean }>`
  display: grid;
  column-gap: inherit;
  row-gap: inherit;
  position: relative;
  height: fit-content;
  grid-column: 1 / -1;
  grid-template-columns: repeat(1, 100%) ${({ isEmpty }) => (isEmpty ? '!important' : '')};

  // 태블릿
  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(auto-fill, ${ColumnTemplate});
  }

  ${mq('desktop')} {
    grid-template-columns: repeat(auto-fill, ${ColumnTemplate});
  }
`;

export const PopularCardItem = styled.div`
  grid-column: span 1 / auto; // 1칸 차지

  @media screen and (min-width: 780px) {
    grid-column: span 4 / auto; // 4칸 차지
  }

  ${mq('desktop')} {
    grid-column: span 2 / auto; // 2칸 차지
  }
`;
