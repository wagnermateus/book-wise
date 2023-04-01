import Image from "next/image";
import { UserAvatar } from "../UserAvatar";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  AvatarImgContainer,
  Book,
  Container,
  CoverContainer,
  Details,
  Header,
  RatingDate,
  TitleAndAuthor,
  UserName,
  UserNameAndRatingDate,
} from "./styles";
import { RatingStars } from "../RatingStars";

type RatingCardProps = {
  userAvtarUrl: string;
  userName: string;
  rating: number;
  bookCoverUrl: string;
  bookTitle: string;
  bookAuthor: string;
  summary: string;
  commentDate: Date;
};

export function RatingCard({
  bookAuthor,
  bookCoverUrl,
  bookTitle,
  rating,
  summary,
  userAvtarUrl,
  userName,
  commentDate,
}: RatingCardProps) {
  const commentDateFormatted = formatDistanceToNow(new Date(commentDate), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Container>
      <Header>
        <AvatarImgContainer>
          <UserAvatar size={38} alt="User profile picture" src={userAvtarUrl} />
        </AvatarImgContainer>
        <UserNameAndRatingDate>
          <UserName>{userName}</UserName>
          <RatingDate>{commentDateFormatted}</RatingDate>
        </UserNameAndRatingDate>
        <RatingStars starSize={17} rating={rating} />
      </Header>
      <Book>
        <CoverContainer>
          <Image
            src={bookCoverUrl}
            alt="Book Cover"
            width={108}
            height={152}
            priority
          />
        </CoverContainer>
        <Details>
          <TitleAndAuthor>
            <strong>{bookTitle}</strong>
            <span>{bookAuthor}</span>
          </TitleAndAuthor>
          <p>{summary}</p>
        </Details>
      </Book>
    </Container>
  );
}
