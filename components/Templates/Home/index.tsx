import * as Typo from '@/components/Atom/Typography';
import { Button } from '@/components/Atom/Button';
import { useResize } from '@/hooks/useResize';
import { IconPlus } from '@/assets/svgs/IconPlus';
import { BACKGROUND_COLOR, FONT_COLOR } from '@/constants/color';
import { ChangeEventHandler, useCallback } from 'react';
import State from '@/components/Atom/State';
import styles from './Home.styled';
import IconArrow from '@/assets/svgs/IconArrow';
import Link from 'next/link';
import { mq } from '@/styles/mediaQuery';
import { useAllPosts, useRecommandPosts } from '@/hooks/queries/cardviewQuery';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthState } from '@/stores/authStateStore';
import { Card } from '@/components/Atom/Card';
import { formatDate } from '@/utils/utils';
import { useRouter } from 'next/router';
import { useCategories } from '@/hooks/queries/categoryQuery';
import { LoginModalState } from '@/stores/modalStateStore';
import { TimeLine } from '@/components/Atom/TimeLine';

interface HomeTemplatesProps {
  selectedTab: 'MEMO' | 'REVIEW';
  typingState: '' | 'checked' | 'saving' | 'error';
  memoValue: string;
  url: string;
  isValidUrl: boolean;

  onTabChange: (type: 'MEMO' | 'REVIEW') => void;
  onMemoChange: ChangeEventHandler<HTMLTextAreaElement>;
  onUrlChange: ChangeEventHandler<HTMLInputElement>;
  onUrlCheck: () => void;
  onClickContent: (url?: string) => void;
  onClickUser: (userpath?: string) => void;
}

const HomeTemplates = ({
  selectedTab,
  typingState,
  memoValue,
  url,
  onMemoChange,
  onUrlChange,
  onUrlCheck,
  onTabChange,
  onClickContent,
  onClickUser,
  isValidUrl,
}: HomeTemplatesProps) => {
  const device = useResize();

  const { isLogin } = useRecoilValue(AuthState);
  const setIsLoginModalOpen = useSetRecoilState(LoginModalState);

  const { data: postsData } = useAllPosts();

  const { data: cardData } = useRecommandPosts('', true);

  const { data: categoryData } = useCategories();

  const categories = categoryData?.data?.categories;

  return (
    <div css={styles.wrapper}>
      {/* <div css={styles.topContainer}>
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
      </div> */}
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

              {selectedTab === 'REVIEW' && (
                <Link
                  href='https://10miri.notion.site/a96b7e92cdee4bc2836a0012b8b610b7'
                  target='_blank'
                  css={styles.reviewGuide}
                >
                  <Typo.Label2 color={FONT_COLOR.GRAY_1}>본인 작성 콘텐츠만 작성 가능</Typo.Label2>
                </Link>
              )}
              {selectedTab === 'MEMO' ? (
                <textarea
                  placeholder={'잊지 말아야 할 것들을 메모해보세요.'}
                  value={memoValue}
                  css={styles.textarea}
                  onChange={onMemoChange}
                  onClick={(e) => {
                    if (!isLogin) {
                      e.currentTarget.blur();
                      setIsLoginModalOpen({ isLoginModalOpen: true });
                    }
                  }}
                />
              ) : (
                <div css={styles.reviewContainer}>
                  <div css={styles.reviewInputContainer}>
                    <input type='text' value={url} onChange={onUrlChange} css={styles.reviewInput} />
                    <button
                      type='button'
                      css={styles.reviewLoadBtn({ isEnable: url.length > 0 && !isValidUrl })}
                      onClick={onUrlCheck}
                    >
                      불러오기
                    </button>
                  </div>
                  {isValidUrl && (
                    <div>
                      <TimeLine
                        changable
                        onDeleteContent={() => console.log(1)}
                        onSaveAllContent={() => console.log(2)}
                      />
                      <Button size='sm'>등록</Button>
                    </div>
                  )}
                </div>
              )}
              {selectedTab === 'MEMO' && memoValue.length > 0 && (
                <div css={styles.textareaBottomContainer({ selectedTab })}>
                  {typingState !== '' && <State state={typingState} />}
                </div>
              )}
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
            <div>{/* 잔디 컴포넌트! */}</div>
          </div>
          {isLogin && (
            <div css={styles.elementContainer}>
              <Typo.H1 color='#D2D2D2'>타임라인</Typo.H1>
              <div>{/* 타임라인 컴포넌트! */}</div>
            </div>
          )}

          {device === 'mobile' && (
            <>
              <div css={styles.elementContainer}>
                <div css={styles.elementTitle}>
                  <Typo.H1 color='#D2D2D2'>다른 사람들의 카드</Typo.H1>
                  <Link href='/cardview'>
                    <Typo.Body color={FONT_COLOR.GRAY_2}>더보기</Typo.Body>
                  </Link>
                </div>

                {cardData?.posts.length === 0 ? (
                  <Typo.H2 color={FONT_COLOR.GRAY_2}>작성된 회고 글이 없습니다.</Typo.H2>
                ) : (
                  <>
                    {cardData?.posts.map((recommandItem, index) => (
                      <Card
                        key={recommandItem.createdAt + index + 'mobile'}
                        size={'mobile'}
                        content={{
                          category: categories?.find((i) => i.identifier === recommandItem.categoryIdentifier)?.name!,
                          header: recommandItem.title,
                          body: recommandItem.summary,
                          img: require('@/assets/images/test.png') as string,
                          name: recommandItem.userPath,
                          date: formatDate(recommandItem.createdAt),
                        }}
                        hasBadge={true}
                        url={recommandItem.url}
                        userpath={recommandItem.userPath}
                        onClickContent={() => onClickContent(recommandItem.url)}
                        onClickUser={() => onClickUser(recommandItem.userPath)}
                      />
                    ))}
                    {postsData?.pages &&
                      postsData?.pages[0]?.posts?.slice(0, 3)?.map((post, idx) => (
                        <div key={post?.createdAt + idx + 'desktop'}>
                          <Card
                            size={'sm'}
                            content={{
                              category: categories?.find((i) => i.identifier === post.categoryIdentifier)?.name!,
                              header: post.title,
                              body: post.summary,
                              img: require('@/assets/images/test.png') as string,
                              name: post.userPath,
                              date: formatDate(post.createdAt),
                            }}
                            url={post.url}
                            userpath={post.userPath}
                            onClickContent={() => onClickContent(post.url)}
                            onClickUser={() => onClickUser(post.userPath)}
                          />
                        </div>
                      ))}
                  </>
                )}
              </div>

              <footer css={styles.footer}>
                <Link
                  href='https://www.plip.kr/pcc/c791921f-5dc3-4cb0-baac-55e48ee2e585/privacy-policy'
                  target='_blank'
                >
                  <Typo.Body color={FONT_COLOR.GRAY_2}>개인정보처리방침</Typo.Body>
                </Link>
                <div css={styles.divider} />
                <Link href='https://10miri.notion.site/a96b7e92cdee4bc2836a0012b8b610b7' target='_blank'>
                  <Typo.Body color={FONT_COLOR.GRAY_2}>서비스 이용 약관</Typo.Body>
                </Link>
              </footer>
            </>
          )}
        </div>
        {device === 'desktop' && (
          <div css={styles.desktopOtherCard}>
            <div css={styles.elementTitle}>
              <Typo.H1 color='#D2D2D2'>다른 사람들의 카드</Typo.H1>
              <Link href='/cardview'>
                <Typo.Body color={FONT_COLOR.GRAY_2}>더보기</Typo.Body>
              </Link>
            </div>
            <div css={styles.otherCardContainer}>
              {/* 다른 사람들의 카드 컴포넌트! */}
              {cardData?.posts?.length === 0 ? (
                <Typo.H2 color={FONT_COLOR.GRAY_2}>작성된 회고 글이 없습니다.</Typo.H2>
              ) : (
                <>
                  {cardData?.posts.map((recommandItem, index) => (
                    <div key={recommandItem.createdAt + index + 'desktop'}>
                      <Card
                        size={'sm'}
                        content={{
                          category: categories?.find((i) => i.identifier === recommandItem.categoryIdentifier)?.name!,
                          header: recommandItem.title,
                          body: recommandItem.summary,
                          img: require('@/assets/images/test.png') as string,
                          name: recommandItem.userPath,
                          date: formatDate(recommandItem.createdAt),
                        }}
                        hasBadge={true}
                        url={recommandItem.url}
                        userpath={recommandItem.userPath}
                        onClickContent={() => onClickContent(recommandItem.url)}
                        onClickUser={() => onClickUser(recommandItem.userPath)}
                      />
                    </div>
                  ))}
                  {postsData?.pages &&
                    postsData?.pages[0]?.posts?.slice(0, 3)?.map((post, idx) => (
                      <div key={post?.createdAt + idx + 'desktop'}>
                        <Card
                          size={'sm'}
                          content={{
                            category: categories?.find((i) => i.identifier === post.categoryIdentifier)?.name!,
                            header: post.title,
                            body: post.summary,
                            img: require('@/assets/images/test.png') as string,
                            name: post.userPath,
                            date: formatDate(post.createdAt),
                          }}
                          url={post.url}
                          userpath={post.userPath}
                          onClickContent={() => onClickContent(post.url)}
                          onClickUser={() => onClickUser(post.userPath)}
                        />
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTemplates;
