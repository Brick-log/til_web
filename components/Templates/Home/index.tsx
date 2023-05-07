import { css } from '@emotion/react';

import * as Typo from '@/components/Atom/Typography';
import { Button } from '@/components/Atom/Button';
import { useResize } from '@/hooks/useResize';
import { IconPlus } from '@/assets/svgs/IconPlus';
import { BACKGROUND_COLOR, FONT_COLOR } from '@/constants/color';
import { ChangeEventHandler } from 'react';
import State from '@/components/Atom/State';
import styles from './Home.styled';
import IconArrow from '@/assets/svgs/IconArrow';
import Link from 'next/link';
import { mq } from '@/styles/mediaQuery';

interface HomeTemplatesProps {
  selectedTab: 'MEMO' | 'REVIEW';
  typingState: '' | 'checked' | 'saving' | 'error';
  memoValue: string;
  reviewValue: string;

  onTabChange: (type: 'MEMO' | 'REVIEW') => void;
  onMemoChange: ChangeEventHandler<HTMLTextAreaElement>;
  onReviewChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const HomeTemplates = ({
  selectedTab,
  typingState,
  memoValue,
  reviewValue,
  onMemoChange,
  onReviewChange,
  onTabChange,
}: HomeTemplatesProps) => {
  const device = useResize();

  return (
    <>
      <div css={styles.topContainer}>
        <div css={styles.topImageContainer} />

        <div css={styles.topTextContainer}>
          <Typo.Title lineHeight='150%' color={FONT_COLOR['WHITE']}>
            꾸준한 회고와 기록을 통해 <br /> 매일 성장하세요
          </Typo.Title>

          <Button size={device === 'mobile' ? 'x-lg-m' : 'lg'} backgroundColor={BACKGROUND_COLOR.FIELD_10} gap={'6px'}>
            <IconPlus width='20' height='20' fill={FONT_COLOR.GRAY_4} stroke={FONT_COLOR.GRAY_4} />
            <Typo.H2 color={FONT_COLOR.GRAY_4}>새 탭을 열 때마다 브릭로그를 확인해보세요</Typo.H2>
          </Button>
        </div>
      </div>
      <div css={styles.desktopContainer}>
        <div css={styles.container}>
          <div>
            <div css={styles.textareaContainer}>
              <div css={styles.memoTab({ selectedTab })} onClick={() => onTabChange('MEMO')}>
                <Typo.H1 color={selectedTab === 'MEMO' ? FONT_COLOR.WHITE : '#636C78'}>메모</Typo.H1>
              </div>
              <div css={styles.reviewTab({ selectedTab })} onClick={() => onTabChange('REVIEW')}>
                <Typo.H1 color={selectedTab === 'MEMO' ? '#636C78' : FONT_COLOR.WHITE}>회고</Typo.H1>
              </div>
              <textarea
                placeholder='잊지 말아야 할 것들을 메모해보세요.'
                value={memoValue}
                css={styles.textarea({ selectedTab })}
                onChange={onMemoChange}
              />

              <div css={styles.textareaBottomContainer({ selectedTab })}>
                {selectedTab === 'MEMO' ? (
                  typingState !== '' && <State state={typingState} />
                ) : (
                  <Button size='sm'>등록</Button>
                )}
              </div>
            </div>
          </div>
          <div css={styles.elementContainer}>
            <div css={styles.elementTitle}>
              <Typo.H1 color='#D2D2D2'>내가 모은 기록</Typo.H1>
              <div css={styles.titleRight}>
                <div css={styles.iconContainer}>
                  <IconArrow width={6} height={10} fill={FONT_COLOR.GRAY_2} transform='rotate(360)' />
                </div>
                <div css={styles.iconContainer}>
                  <IconArrow width={6} height={10} fill={FONT_COLOR.GRAY_2} transform='rotate(180)' />
                </div>
              </div>
            </div>
            <div css={styles.tempBox}>{/* 잔디 컴포넌트! */}</div>
          </div>
          <div css={styles.elementContainer}>
            <Typo.H1 color='#D2D2D2'>타임라인</Typo.H1>
            <div css={styles.tempBox}>{/* 타임라인 컴포넌트! */}</div>
          </div>
          {device === 'mobile' && (
            <div css={styles.elementContainer}>
              <div css={styles.elementTitle}>
                <Typo.H1 color='#D2D2D2'>다른 사람들의 카드</Typo.H1>
                <Link href='/more'>
                  <Typo.Body color={FONT_COLOR.GRAY_2}>더보기</Typo.Body>
                </Link>
              </div>
              <div css={styles.tempBox}>{/* 다른 사람들의 카드 컴포넌트! */}</div>
            </div>
          )}
        </div>
        {device === 'desktop' && (
          <div css={styles.desktopOtherCard}>
            <div css={styles.elementTitle}>
              <Typo.H1 color='#D2D2D2'>다른 사람들의 카드</Typo.H1>
              <Link href='/more'>
                <Typo.Body color={FONT_COLOR.GRAY_2}>더보기</Typo.Body>
              </Link>
            </div>
            <div css={styles.tempBox}>{/* 다른 사람들의 카드 컴포넌트! */}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeTemplates;