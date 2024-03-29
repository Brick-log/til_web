import { ReactElement, useEffect, useState, memo, useCallback } from 'react';
import Image from 'next/image';
import * as Styled from './styles';
import * as Typo from '@/components/Atom/Typography';
import { IconCrown } from '@/assets/svgs/IconCrown';
import { CardProps } from './types';
import ContentsModal from '@/components/Molecules/ContentsModal';
import IconLock from '@/assets/svgs/IconLock';
import useToast from '@/hooks/useToast';
import { FONT_COLOR } from '@/constants/color';
import IconError from '@/assets/svgs/IconError';

const Card = ({ size, hasBadge = false, content, onClickUser, userpath, isPrivate, item }: CardProps): ReactElement => {
  const [tagList, setTagList] = useState([content.category]);
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (hasBadge) setTagList([...tagList, '#추천 회고']);
    else setTagList(tagList.filter((tag) => tag !== '#추천 회고'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasBadge]);

  const Badge = () => {
    return (
      <>
        <Styled.BadgeTop size={size}>
          <Styled.CrownIcon size={size}>
            <IconCrown />
          </Styled.CrownIcon>
        </Styled.BadgeTop>
        <Styled.BadgeBottom size={size}></Styled.BadgeBottom>
      </>
    );
  };
  const handleClickCard = () => {
    if (isPrivate) {
      showToast(
        <>
          <IconError />
          <Typo.H1 color={FONT_COLOR.WHITE}>비공개 게시글 입니다</Typo.H1>
        </>,
        true,
      );
      return;
    }
    setIsOpen(true);
  };
  return (
    <>
      <Styled.CardContainer size={size} onClick={handleClickCard}>
        {hasBadge ? <Badge /> : null}
        <Styled.CardHeader>
          {tagList.map((tag, idx) => {
            return (
              <Styled.TagWrapper key={tag + idx}>
                <Typo.Label2 color='#22FFA2'>
                  {tag === '#추천 회고' ? ' ' : ''}
                  {tag}
                </Typo.Label2>
              </Styled.TagWrapper>
            );
          })}
        </Styled.CardHeader>
        <Styled.CardBodyContent>
          <Styled.CardTitle>
            <Typo.H2 color='#DADFE6'>{content?.header}</Typo.H2> {isPrivate && <IconLock />}
          </Styled.CardTitle>
          <Styled.CardBodyDesc>
            <Typo.Body color='#636C78'>{content?.body}</Typo.Body>
          </Styled.CardBodyDesc>
        </Styled.CardBodyContent>
        <Styled.CardInfoWrapper>
          <Image
            src={content?.img || ''}
            alt='profileImg'
            width={19}
            height={19}
            onClick={(e) => {
              e.stopPropagation();
              onClickUser(userpath);
            }}
          />
          <Styled.CardUserProfile
            onClick={(e) => {
              e.stopPropagation();
              onClickUser(userpath);
            }}
          >
            <Typo.Label1 color='#C5CAD0'>{content?.name}</Typo.Label1>
          </Styled.CardUserProfile>
          <div>
            <Typo.Label1 color='#636C78'>{content?.date}</Typo.Label1>
          </div>
        </Styled.CardInfoWrapper>
      </Styled.CardContainer>
      {isOpen && <ContentsModal isOpen={isOpen} item={item} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default memo(Card);
