import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  AvatarImgContainer,
  Container,
  Details,
  RatingDate,
  UserName,
  UserNameAndRatingDateBox,
} from "./styles";
import { RatingStars } from "@/components/RatingStars";
import { UserAvatar } from "@/components/UserAvatar";

type BookRatingProps = {
  userAvtarUrl: string;
  userName: string;
  rating: number;
  summary: string;
  commentDate: Date;
  userId?: string;
};

export function BookRating({
  rating,
  summary,
  userAvtarUrl,
  userName,
  commentDate,
  userId,
}: BookRatingProps) {
  const commentDateFormatted = formatDistanceToNow(new Date(commentDate), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Container>
      <Details>
        <AvatarImgContainer>
          <UserAvatar
            size={40}
            alt="User profile picture"
            src={userAvtarUrl}
            id={userId}
          />
        </AvatarImgContainer>
        <UserNameAndRatingDateBox>
          <UserName>{userName}</UserName>
          <RatingDate>{commentDateFormatted}</RatingDate>
        </UserNameAndRatingDateBox>
        <RatingStars starSize={14} rating={rating} />
      </Details>
      <p>{summary}</p>
    </Container>
  );
}
