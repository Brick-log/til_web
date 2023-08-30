// [user].tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { BACKGROUND_COLOR, FONT_COLOR, POINT_COLOR } from '@/constants/color';

import * as Styled from '@/styles/mypage.module';
import { clickedGrassDate } from '@/stores/user';
import IconRequest from '@/assets/svgs/IconRequest';

import ProfileIcon from '@/components/Molecules/ProfileIcon';
import * as Typo from '@/components/Atom/Typography';
import { Button } from '@/components/Atom/Button';
import BlogGroup from '@/components/Molecules/BlogGroup';
import Spinner from '@/components/Atom/Spinner';
import styles from '@/components/Molecules/OAuthLoading/OAuthLoading.styled';
import ToastMessage from '@/components/ToastMessage';
import GrassTemplate from '@/components/Templates/GrassTemplate';
import TimelineTemplate from '@/components/Templates/TimelineTemplate';
import { BlogData } from '@/components/Molecules/BlogGroup/type';

import useToast from '@/hooks/useToast';
import { useGetBlogs } from '@/hooks/queries/userQuery';
import { useMyUser, useUserProfile } from '@/hooks/queries/profileQuery';

import Custom404 from '@/pages/404';
import { AuthState } from '@/stores/authStateStore';

const NameCategory = ({ isMe, name, category }: { isMe: boolean; name: string; category: string }) => {
  return (
    <Styled.InfoContainer>
      <Styled.InfoLeftArea>
        <Typo.H1 color={FONT_COLOR.WHITE}>{name}</Typo.H1>
        <Typo.Label2 color={POINT_COLOR.MAIN}>{category}</Typo.Label2>
      </Styled.InfoLeftArea>
      {isMe ? (
        <Styled.InfoRightArea>
          <SettingButton />
        </Styled.InfoRightArea>
      ) : null}
    </Styled.InfoContainer>
  );
};

const SettingButton = () => {
  return (
    <Link href='/setting'>
      <Button size='md' backgroundColor={BACKGROUND_COLOR.FIELD_10}>
        <Typo.Label1 color={FONT_COLOR.WHITE}>계정설정</Typo.Label1>
      </Button>
    </Link>
  );
};

const Introduction = ({ introduction, blogs }: { introduction: string; blogs: BlogData[] }) => {
  return (
    <Styled.IntroductionContainer>
      <Typo.Body color={FONT_COLOR.WHITE}>{introduction}</Typo.Body>
      <BlogGroup data={blogs} />
    </Styled.IntroductionContainer>
  );
};

const Loading = () => {
  return (
    <div css={styles.loadingContainer}>
      <div css={styles.spinnerContainer}>
        <Spinner size='46px' />
        <Typo.Body color={FONT_COLOR.WHITE}>Loading ... </Typo.Body>
      </div>
    </div>
  );
};

const User: NextPage = () => {
  // query로 가져와도 되는데 이렇게 꺼내도 될듯 합니다.
  // const router = useRouter();
  // const urlPath = (router.query?.user as string) || '';
  // const { isReady } = router;
  const { isOpen, text } = useToast();
  const { isLogin } = useRecoilValue(AuthState);
  const { data: userData, isSuccess: isSuccessUser } = useMyUser({ isLogin });
  const path = userData ? userData.path : '';
  const {
    data: userInfo,
    isLoading,
    isSuccess,
  } = useUserProfile({ userPath: path, enabled: isLogin && path.length > 0 });
  const { data: blogObject, isSuccess: blogGetSuccess } = useGetBlogs(path);

  const setClickedDate = useSetRecoilState(clickedGrassDate);

  return isLoading ? (
    <Loading />
  ) : isSuccessUser && isSuccess ? (
    <Styled.MypageWrapper>
      <Styled.MypageContainer>
        <Styled.IntroContainer>
          <ProfileIcon imgUrl={userInfo.profileImgSrc} />
          <Styled.TextContainer>
            <NameCategory isMe={userInfo.isAuthorized} name={userInfo.name} category={userInfo.categoryName} />
            {blogGetSuccess ? <Introduction blogs={blogObject.blogs} introduction={userInfo.introduction} /> : null}
          </Styled.TextContainer>
        </Styled.IntroContainer>
        <GrassTemplate
          path={path}
          title={`${userInfo.name}의 기록`}
          onClick={(value) => {
            setClickedDate(value);
          }}
        />
        <TimelineTemplate path={path} changable={userInfo.isAuthorized} />
      </Styled.MypageContainer>
      <Styled.FloatingContainer>
        <Button size='float' svg={<IconRequest />} onClick={() => window.open('https://tally.so/r/w5bNJd')} />
      </Styled.FloatingContainer>
      {isOpen && <ToastMessage isOpen={isOpen}>{text}</ToastMessage>}
    </Styled.MypageWrapper>
  ) : (
    <Custom404 />
  );
};

export default User;
