// [user].tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';

import { BACKGROUND_COLOR, FONT_COLOR, POINT_COLOR } from '@/constants/color';

import {
  MypageWrapper,
  MypageContainer,
  IntroContainer,
  TextContainer,
  InfoContainer,
  InfoLeftArea,
  InfoRightArea,
  IntroductionContainer,
  FloatingContainer,
} from '@/styles/mypage.module';
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
import { useGetBlogs, useGetUser } from '@/hooks/queries/userQuery';

import Custom404 from '@/pages/404';

const NameCategory = ({ isMe, name, category }: { isMe: boolean; name: string; category: string }) => {
  return (
    <InfoContainer>
      <InfoLeftArea>
        <Typo.H1 color={FONT_COLOR.WHITE}>{name}</Typo.H1>
        <Typo.Label2 color={POINT_COLOR.MAIN}>{category}</Typo.Label2>
      </InfoLeftArea>
      {isMe ? (
        <InfoRightArea>
          <SettingButton />
        </InfoRightArea>
      ) : null}
    </InfoContainer>
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
    <IntroductionContainer>
      <Typo.Body color={FONT_COLOR.WHITE}>{introduction}</Typo.Body>
      <BlogGroup data={blogs} />
    </IntroductionContainer>
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
  const router = useRouter();
  const urlPath = (router.query?.user as string) || '';
  const { isReady } = router;
  const path = urlPath.slice(1);
  const { isOpen, text } = useToast();

  const { data: userInfo, isLoading, isSuccess } = useGetUser(path, isReady);

  const { data: blogObject, isSuccess: blogGetSuccess } = useGetBlogs(path);

  const setClickedDate = useSetRecoilState(clickedGrassDate);

  return isLoading ? (
    <Loading />
  ) : !(!isSuccess || urlPath.at(0) !== '@') ? (
    <MypageWrapper>
      <MypageContainer>
        <IntroContainer>
          <ProfileIcon imgUrl={userInfo?.profileImgSrc ?? ''} />
          <TextContainer>
            <NameCategory
              isMe={userInfo?.isAuthorized ?? false}
              name={userInfo?.name ?? ''}
              category={userInfo?.categoryName ?? ''}
            />
            {blogGetSuccess ? (
              <Introduction blogs={blogObject.blogs} introduction={userInfo?.introduction ?? ''} />
            ) : null}
          </TextContainer>
        </IntroContainer>
        <GrassTemplate
          path={path}
          title={`${userInfo?.name}의 기록`}
          onClick={(value) => {
            setClickedDate(value);
          }}
        />

        <TimelineTemplate path={path} changable={userInfo?.isAuthorized ?? false} />
      </MypageContainer>
      <FloatingContainer>
        <Button size='float' svg={<IconRequest />} onClick={() => window.open('https://tally.so/r/w5bNJd')} />
      </FloatingContainer>
      {isOpen && <ToastMessage isOpen={isOpen}>{text}</ToastMessage>}
    </MypageWrapper>
  ) : (
    <Custom404 />
  );
};

export default User;
