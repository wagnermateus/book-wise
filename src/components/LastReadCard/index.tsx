import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  Book,
  Container,
  CoverContainer,
  Details,
  Header,
  RatingDate,
  TitleAndAuthor,
} from "./styles";
import { RatingStars } from "../RatingStars";

interface LastReadProps {
  lastRead: {
    ratings: [
      {
        book: {
          name: string;
          author: string;
          cover_url: string;
          summary: string;
        };
        rate: number;
        created_at: Date;
      }
    ];
  };
}

export function LastReadCard({ lastRead }: LastReadProps) {
  const commentDateFormatted = formatDistanceToNow(
    new Date(lastRead!.ratings[0].created_at),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );

  return (
    <Container>
      <CoverContainer>
        <Image
          src={lastRead!.ratings[0].book.cover_url}
          alt="Book Cover"
          width={108}
          height={152}
        />
      </CoverContainer>
      <Book>
        <Header>
          <RatingDate>{commentDateFormatted}</RatingDate>

          <RatingStars starSize={17} rating={lastRead!.ratings[0].rate} />
        </Header>
        <Details>
          <TitleAndAuthor>
            <strong>{lastRead!.ratings[0].book.name}</strong>
            <span>{lastRead!.ratings[0].book.author}</span>
          </TitleAndAuthor>
          <p>{lastRead!.ratings[0].book.summary}</p>
        </Details>
      </Book>
    </Container>
  );
}
