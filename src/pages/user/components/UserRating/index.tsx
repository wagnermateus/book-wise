import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  Book,
  Comment,
  Container,
  Content,
  CoverContainer,
  Details,
  RatingDate,
  TitleAndAuthor,
} from "./styles";
import { RatingStars } from "@/components/RatingStars";

type UserRatingProps = {
  rating: number;
  bookCoverUrl: string;
  bookTitle: string;
  bookAuthor: string;
  comment: string;
  commentDate: Date;
};

export function UserRating({
  bookAuthor,
  bookCoverUrl,
  bookTitle,
  rating,
  comment,
  commentDate,
}: UserRatingProps) {
  const commentDateFormatted = formatDistanceToNow(new Date(commentDate), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <Container>
      <RatingDate>{commentDateFormatted}</RatingDate>
      <Content>
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
            <RatingStars starSize={17} rating={rating} />
          </Details>
        </Book>

        <Comment>{comment}</Comment>
      </Content>
    </Container>
  );
}
